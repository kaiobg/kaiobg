// Workout state management
class WorkoutManager {
  constructor(workoutPlans) {
      this.workoutPlans = workoutPlans;
      this.init();
  }

  init() {
      // Load saved progress from localStorage
      this.loadProgress();
      this.renderWorkouts();
      this.setupEventListeners();
  }

  loadProgress() {
      const savedProgress = localStorage.getItem('workoutProgress');
      if (savedProgress) {
          const progress = JSON.parse(savedProgress);
          this.workoutPlans = this.workoutPlans.map(plan => ({
              ...plan,
              exercises: plan.exercises.map(exercise => ({
                  ...exercise,
                  completed: progress[exercise.id] || false
              }))
          }));
      }
  }

  saveProgress() {
      const progress = {};
      this.workoutPlans.forEach(plan => {
          plan.exercises.forEach(exercise => {
              progress[exercise.id] = exercise.completed;
          });
      });
      localStorage.setItem('workoutProgress', JSON.stringify(progress));
  }

  formatRestTime(seconds) {
      if (seconds < 60) {
          return `${seconds}s`;
      }
      const minutes = Math.floor(seconds / 60);
      const remainingSeconds = seconds % 60;
      return remainingSeconds > 0 
          ? `${minutes}m ${remainingSeconds}s` 
          : `${minutes}m`;
  }

  calculateProgress(workoutId) {
      const plan = this.workoutPlans.find(p => p.id === workoutId);
      if (!plan) return { completed: 0, total: 0, percent: 0 };

      const completed = plan.exercises.filter(ex => ex.completed).length;
      const total = plan.exercises.length;
      const percent = (completed / total) * 100;

      return { completed, total, percent };
  }

  toggleWorkout(workoutId) {
      const content = document.getElementById(`workout-content-${workoutId}`);
      const chevron = document.getElementById(`workout-chevron-${workoutId}`);
      content.classList.toggle('expanded');
      chevron.style.transform = content.classList.contains('expanded') ? 'rotate(180deg)' : '';
  }

  toggleVideo(workoutId, exerciseId) {
      const videoContainer = document.getElementById(`video-${workoutId}-${exerciseId}`);
      const chevron = document.getElementById(`chevron-${workoutId}-${exerciseId}`);
      const wasExpanded = videoContainer.classList.contains('expanded');

      // Close all videos in this workout
      document.querySelectorAll(`.video-container-${workoutId}`).forEach(container => {
          container.classList.remove('expanded');
      });
      document.querySelectorAll(`.exercise-chevron-${workoutId}`).forEach(chev => {
          chev.textContent = '▼';
      });

      if (!wasExpanded) {
          videoContainer.classList.add('expanded');
          chevron.textContent = '▲';
      }
  }

  toggleComplete(workoutId, exerciseId) {
      const plan = this.workoutPlans.find(p => p.id === workoutId);
      if (!plan) return;

      const exercise = plan.exercises.find(ex => ex.id === exerciseId);
      if (!exercise) return;

      exercise.completed = !exercise.completed;
      
      // Update UI
      const button = document.getElementById(`status-${workoutId}-${exerciseId}`);
      button.classList.toggle('completed');
      button.innerHTML = exercise.completed ? '✓' : '×';

      // Update progress
      const progress = this.calculateProgress(workoutId);
      document.getElementById(`completed-${workoutId}`).textContent = progress.completed;
      document.getElementById(`total-${workoutId}`).textContent = progress.total;
      document.getElementById(`progress-bar-${workoutId}`).style.width = `${progress.percent}%`;

      // Save progress
      this.saveProgress();
  }

  renderWorkouts() {
      const container = document.getElementById('workouts-container');
      container.innerHTML = this.workoutPlans.map(plan => {
          const progress = this.calculateProgress(plan.id);
          
          return `
              <div class="workout-card">
                  <div class="workout-header" onclick="workoutManager.toggleWorkout('${plan.id}')">
                      <div>
                          <h2>${plan.title}</h2>
                          <p>${plan.description}</p>
                      </div>
                      <div class="progress-container">
                          <span class="progress-text">
                              <span id="completed-${plan.id}">${progress.completed}</span>/<span id="total-${plan.id}">${progress.total}</span>
                          </span>
                          <div class="progress-bar">
                              <div class="progress" id="progress-bar-${plan.id}" style="width: ${progress.percent}%"></div>
                          </div>
                          <span class="chevron" id="workout-chevron-${plan.id}">▼</span>
                      </div>
                  </div>
                  
                  <div class="workout-content" id="workout-content-${plan.id}">
                      <table>
                          <thead>
                              <tr>
                                  <th>Exercício</th>
                                  <th>Séries</th>
                                  <th>Repetições</th>
                                  <th>Descanso</th>
                                  <th>Status</th>
                              </tr>
                          </thead>
                          <tbody>
                              ${plan.exercises.map(exercise => `
                                  <tr>
                                      <td>
                                          <button class="exercise-name" onclick="workoutManager.toggleVideo('${plan.id}', '${exercise.id}')">
                                              <span class="exercise-chevron exercise-chevron-${plan.id}" id="chevron-${plan.id}-${exercise.id}">▼</span>
                                              ${exercise.name}
                                          </button>
                                          <div class="video-container video-container-${plan.id}" id="video-${plan.id}-${exercise.id}">
                                              <iframe
                                                  src="${exercise.videoUrl}"
                                                  title="${exercise.name}"
                                                  allowfullscreen
                                                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                              ></iframe>
                                          </div>
                                      </td>
                                      <td>${exercise.sets}</td>
                                      <td>${exercise.reps}</td>
                                      <td>${this.formatRestTime(exercise.rest)}</td>
                                      <td>
                                          <button 
                                              id="status-${plan.id}-${exercise.id}"
                                              class="status-button ${exercise.completed ? 'completed' : ''}"
                                              onclick="workoutManager.toggleComplete('${plan.id}', '${exercise.id}')"
                                          >
                                              ${exercise.completed ? '✓' : '×'}
                                          </button>
                                      </td>
                                  </tr>
                              `).join('')}
                          </tbody>
                      </table>
                  </div>
              </div>
          `;
      }).join('');
  }

  setupEventListeners() {
      // Add any global event listeners here
      window.addEventListener('storage', () => this.loadProgress());
  }
}

// Initialize the workout manager
let workoutManager;
document.addEventListener('DOMContentLoaded', () => {
  workoutManager = new WorkoutManager(workoutPlans);
});