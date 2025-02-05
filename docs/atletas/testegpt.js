document.addEventListener("DOMContentLoaded", () => {
    const atletas = {
        "najupma": {
            nome: "Ana Julia Marques",
            foto: "../galeria/naju.jpg",
            grafico:"../galeria/testes.png",
            nascimento: "1994-10-06",
            plano: "Presencial 2x/semana",
            frequencia: "5x semana",
            numero: "#1/2025",
            foco: "Constância é a chave para o resultado",
            dataProducao: "11/1",
            
            objetivo_principal: "Fortalecer, melhorar saúde física e mental e aumentar força",
            treinos: [
                {texto: "Treino  A", url: "http://kaioguerrero.com/atletas/najupma_a"},
                {texto: "Treino  B", url: "http://kaioguerrero.com/atletas/najupma_b"},
                {texto: "Treino  C", url: "http://kaioguerrero.com/atletas/najupma_c"},
                
            ],
            testes:[
                {texto: "Histórico de treinos", url: "http://kaioguerrero.com/index"}
            ],
            whats:[
                {texto: "Fale comigo", 
                    url: "https://wa.me/19999472024?text=Me ajuda,%20gostaria%20de%20falar%20sobre%20o%20meu%20treinamento" }
            ],
            
        },
        "cauesj": {
            nome: "Cauê da Silva",
            foto: "../galeria/caue.jpg",
            grafico:"../galeria/testes.png",
            nascimento: "1997-08-05",
            plano: "Presencial 2x/semana",
            frequencia: "5x semana",
            numero: "#1/2025",
            foco: "Constância é a chave para o resultado",
            dataProducao: "11/1",
            
            objetivo_principal: "Fortalecer ombro e joelho, definição e prevenção de lesão",
            treinos: [
                {texto: "Treino  A", url: "http://kaioguerrero.com/atletas/cauesj_a"},
                {texto: "Treino  B", url: "http://kaioguerrero.com/atletas/cauesj_b"},
                {texto: "Treino  C", url: "http://kaioguerrero.com/atletas/cauesj_c"},
                {texto: "Treino  D", url: "http://kaioguerrero.com/atletas/cauesj_d"},
                {texto: "Treino  Basquete", url: "http://kaioguerrero.com/atletas/cauesj_ba"},
                
            ],
            testes:[
                {texto: "Histórico de treinos", url: "https://docs.google.com/spreadsheets/d/e/2PACX-1vRL91_7QgDkLA_Iw4H6zD-A_qYF_Ln_QLPgXXFpUhi6nwLlzQ5qbp3eF-R18Ve9CHxXZzDDUZ76vS85/pubhtml?gid=786014744&single=true"}
            ],
            whats:[
                {texto: "Fale comigo", 
                    url: "https://wa.me/19999472024?text=Me ajuda,%20gostaria%20de%20falar%20sobre%20o%20meu%20treinamento" }
            ],
            
        },
        "Biagsilva": {
            nome: "Beatriz Gonçalves Silva",
            foto: "../galeria/bia.jpg",
            grafico:"../galeria/testes.png",
            nascimento: "1994-09-02",
            plano: "Presencial 2x/semana",
            frequencia: "3x semana",
            numero: "#1/2025",
            foco: "Reclama de fazer braço, mas faz",
            dataProducao: "11/1",
            
            objetivo_principal: "Fortalecer ombro, definição e ganho de massa",
            treinos: [
                {texto: "Treino  A", url: "http://kaioguerrero.com/atletas/Biagsilva_a"},
               
                
            ],
            testes:[
                {texto: "Histórico de treinos", url: "https://docs.google.com/spreadsheets/d/e/2PACX-1vRL91_7QgDkLA_Iw4H6zD-A_qYF_Ln_QLPgXXFpUhi6nwLlzQ5qbp3eF-R18Ve9CHxXZzDDUZ76vS85/pubhtml?gid=498235900&single=true"}
            ],
            whats:[
                {texto: "Fale comigo", 
                    url: "https://wa.me/19999472024?text=Me ajuda,%20gostaria%20de%20falar%20sobre%20o%20meu%20treinamento" }
            ],
            
        },
        "Bruna8178": {
            nome: "Bruna Alves de Freitas",
            foto: "../galeria/brunaa.png",
            grafico:"../galeria/testes.png",
            nascimento: "1993-05-03",
            plano: "Consultoria de corrida",
            frequencia: "2x semana",
            numero: "#1/2025",
            foco: "Bora correr atrás dos objetivos",
            dataProducao: "11/1",
            
            objetivo_principal: "Melhorar o condicionamento de corrida",
            treinos: [
                {texto: "Treino  Corrida", url: "https://docs.google.com/spreadsheets/d/1sz207z8bC9OmVQn7XUtrCiGXEUvzdIBPNJZuBFMZwg4/edit?usp=sharing"},
                {texto: "Treino  Pré-corrida", url: "http://kaioguerrero.com/atletas/corrida"},
                
            ],
            testes:[
                {texto: "Histórico de treinos", url: "http://kaioguerrero.com/index"}
            ],
            whats:[
                {texto: "Fale comigo", 
                    url: "https://wa.me/19999472024?text=Me ajuda,%20gostaria%20de%20falar%20sobre%20o%20meu%20treinamento" }
            ],
            
        },
        "Day": {
            nome: "Dayane Cerigatto",
            foto: "../galeria/day.png",
            grafico:"../galeria/testes.png",
            nascimento: "1988-07-07",
            plano: "Consultoria de corrida",
            frequencia: "2x semana",
            numero: "#1/2025",
            foco: "Bora correr atrás dos objetivos",
            dataProducao: "20/1",
            
            objetivo_principal: "Melhorar o condicionamento de corrida",
            treinos: [
                {texto: "Treino  Corrida", url: "https://docs.google.com/spreadsheets/d/1OxH1e88PG-Ean5IjOngZgcgpDarP93fmNMMRAjthqvI/edit?usp=sharing"},
                {texto: "Treino  Pré-corrida", url: "http://kaioguerrero.com/atletas/corrida"},
                
                
            ],
            testes:[
                {texto: "Histórico de treinos", url: "http://kaioguerrero.com/index"}
            ],
            whats:[
                {texto: "Fale comigo", 
                    url: "https://wa.me/19999472024?text=Me ajuda,%20gostaria%20de%20falar%20sobre%20o%20meu%20treinamento" }
            ],
            
        },
        "Kabata": {
            nome: "Daniel Kabata",
            foto: "../galeria/daniel.jpg",
            grafico:"../galeria/testes.png",
            nascimento: "1992-03-17",
            plano: "Presencial 2x/semana",
            frequencia: "3x semana",
            numero: "#1/2025",
            foco: "Reclama de fazer perna, mas faz",
            dataProducao: "11/1",
            
            objetivo_principal: "Fortalecer ombro e joelho, hipertrofia e saúde",
            treinos: [
                {texto: "Treino  A", url: "http://kaioguerrero.com/atletas/Kabata_a"},
            ],
            testes:[
                {texto: "Histórico de treinos", url: "https://docs.google.com/spreadsheets/d/e/2PACX-1vRL91_7QgDkLA_Iw4H6zD-A_qYF_Ln_QLPgXXFpUhi6nwLlzQ5qbp3eF-R18Ve9CHxXZzDDUZ76vS85/pubhtml?gid=209201510&single=true"}
            ],
            whats:[
                {texto: "Fale comigo", 
                    url: "https://wa.me/19999472024?text=Me ajuda,%20gostaria%20de%20falar%20sobre%20o%20meu%20treinamento" }
            ],
            
        },
        "llneco": {
            nome: "Leonardo Lopes Neco",
            foto: "../galeria/leoneco.png",
            grafico:"../galeria/leoneco1.png",
            nascimento: "1994-04-03",
            plano: "Consultoria de treino",
            frequencia: "3x semana",
            numero: "#1/2025",
            foco: "A constância molda resultados",
            dataProducao: "20/1",
            
            objetivo_principal: "Condicionamento físico e qualidade de vida",
            treinos: [
                {texto: "Treino  A", url: "http://kaioguerrero.com/atletas/llneco_a"},
                {texto: "Treino  B", url: "http://kaioguerrero.com/atletas/llneco_b"},
                {texto: "Treino  C", url: "http://kaioguerrero.com/atletas/llneco_c"},
                {texto: "Treino  D", url: "http://kaioguerrero.com/atletas/llneco_d"},
            ],
            testes:[
                {texto: "Histórico de treinos", url: "https://docs.google.com/spreadsheets/d/e/2PACX-1vRL91_7QgDkLA_Iw4H6zD-A_qYF_Ln_QLPgXXFpUhi6nwLlzQ5qbp3eF-R18Ve9CHxXZzDDUZ76vS85/pubhtml?gid=2017369885&single=true"}
            ],
            whats:[
                {texto: "Fale comigo", 
                    url: "https://wa.me/19999472024?text=Me ajuda,%20gostaria%20de%20falar%20sobre%20o%20meu%20treinamento" }
            ],
            
        },
        "luiznochi": {
            nome: "Luiz Nochi",
            foto: "../galeria/luiz.png",
            grafico:"../galeria/testes.png",
            nascimento: "1995-08-22",
            plano: "Consultoria de treino",
            frequencia: "4x semana",
            numero: "#2/2025",
            foco: "A constância molda resultados",
            dataProducao: "03/2",
            
            objetivo_principal: "Condicionamento físico e qualidade de vida",
            treinos: [
                {texto: "Treino  A", url: "http://kaioguerrero.com/atletas/luiznochi_a"},
                {texto: "Treino  B", url: "http://kaioguerrero.com/atletas/luiznochi_b"},
                {texto: "Treino  C", url: "http://kaioguerrero.com/atletas/luiznochi_c"},
                {texto: "Treino  D", url: "http://kaioguerrero.com/atletas/luiznochi_d"},
            ],
            testes:[
                {texto: "Histórico de treinos", url: "https://docs.google.com/spreadsheets/d/e/2PACX-1vRL91_7QgDkLA_Iw4H6zD-A_qYF_Ln_QLPgXXFpUhi6nwLlzQ5qbp3eF-R18Ve9CHxXZzDDUZ76vS85/pubhtml?gid=2017369885&single=true"}
            ],
            whats:[
                {texto: "Fale comigo", 
                    url: "https://wa.me/19999472024?text=Me ajuda,%20gostaria%20de%20falar%20sobre%20o%20meu%20treinamento" }
            ],
            
        },
        
        "Feaugar": {
            nome: "Felipe Augusto",
            foto: "../galeria/felipe.png",
            grafico:"../galeria/testes.png",
            nascimento: "1989-06-18",
            plano: "Consultoria de treino - basquete",
            frequencia: "2x semana",
            numero: "#1/2025",
            foco: "Constância é a chave para o resultado",
            dataProducao: "29/12",
            
            objetivo_principal: "Criar rotina, emagrecer, fortalecer, saúde física e mental e entrar em forma",
            treinos: [
                {texto: "Treino Mobilidade", url: "http://kaioguerrero.com/atletas/Feaugar_a"},
                {texto: "Treino Basquete", url: "http://kaioguerrero.com/atletas/Feaugar_b"},
                
            ],
            testes:[
                {texto: "Histórico de treinos", url: "http://kaioguerrero.com/index"}
            ],
            whats:[
                {texto: "Fale comigo", 
                    url: "https://wa.me/19999472024?text=Me ajuda,%20gostaria%20de%20falar%20sobre%20o%20meu%20treinamento" }
            ],
            
        },
        "iwagaki": {
            nome: "Felipe Braga",
            foto: "../galeria/braga.png",
            grafico:"../galeria/testes.png",
            nascimento: "1988-07-01",
            plano: "Consultoria de treino - basquete",
            frequencia: "2x semana",
            numero: "#1/2025",
            foco: "Constância é a chave para o resultado",
            dataProducao: "29/12",
            
            objetivo_principal: "Criar rotina, emagrecer, fortalecer, saúde física e mental e entrar em forma",
            treinos: [
                {texto: "Treino Basquete", url: "http://kaioguerrero.com/atletas/iwagaki_a"},
                {texto: "Rotina pré-jogo", url: "http://kaioguerrero.com/atletas/iwagaki_b"},
                
            ],
            testes:[
                {texto: "Histórico de treinos", url: "http://kaioguerrero.com/index"}
            ],
            whats:[
                {texto: "Fale comigo", 
                    url: "https://wa.me/19999472024?text=Me ajuda,%20gostaria%20de%20falar%20sobre%20o%20meu%20treinamento" }
            ],
            
        },
        "gabriel_peagno": {
            nome: "Gabriel Peagno",
            foto: "../galeria/gadiel.png",
            grafico:"../galeria/testes.png",
            nascimento: "2003-02-16",
            plano: "Consultoria de treino",
            frequencia: "4x semana",
            numero: "#1/2025",
            foco: "Constância é a chave para o resultado",
            dataProducao: "29/12",
            
            objetivo_principal: "Criar rotina, emagrecer, fortalecer, saúde física e mental e entrar em forma",
            treinos: [
                {texto: "Treino funcional A", url: "http://kaioguerrero.com/atletas/gabriel_peagno_a"},
                {texto: "Treino funcional B", url: "http://kaioguerrero.com/atletas/gabriel_peagno_b"},
                {texto: "Treino Basquete", url: "http://kaioguerrero.com/atletas/gabriel_peagno_c"},
                { texto: "Treino Corrida", url: "https://docs.google.com/spreadsheets/d/1iiu6vaaa4803hvowzGfDG_Pd6j_8-LPz7OWbcy2wHfQ/edit?usp=sharing" },
                
            ],
            testes:[
                {texto: "Histórico de treinos", url: "https://docs.google.com/spreadsheets/d/e/2PACX-1vRL91_7QgDkLA_Iw4H6zD-A_qYF_Ln_QLPgXXFpUhi6nwLlzQ5qbp3eF-R18Ve9CHxXZzDDUZ76vS85/pubhtml?gid=1138847232&single=true"}
            ],
            whats:[
                {texto: "Fale comigo", 
                    url: "https://wa.me/19999472024?text=Me ajuda,%20gostaria%20de%20falar%20sobre%20o%20meu%20treinamento" }
            ],
            
        },
        "jessica_calixto": {
            nome: "Jessica Calixto",
            foto: "../galeria/jessica.png",
            grafico:"../galeria/testes.png",
            nascimento: "1992-08-18",
            plano: "Consultoria de treino e corrida",
            frequencia: "4x semana",
            numero: "#1/2025",
            foco: "Constância é a chave para o resultado",
            dataProducao: "11/01",
            
            objetivo_principal: "Criar rotina, emagrecer, fortalecer, saúde física e mental e entrar em forma",
            treinos: [
                {texto: "Treino  A", url: "http://kaioguerrero.com/atletas/jessica_calixto_a"},
                {texto: "Treino  B", url: "http://kaioguerrero.com/atletas/jessica_calixto_b"},
                {texto: "Treino  C", url: "http://kaioguerrero.com/atletas/jessica_calixto_c"},
                {texto: "Treino  Pré-corrida", url: "http://kaioguerrero.com/atletas/corrida"},
                {texto: "Treino especial joelho", url: "http://kaioguerrero.com/atletas/jessica_calixto_e"},
                {texto: "Treino faça todo dia", url: "http://kaioguerrero.com/atletas/jessica_calixto_f"},
                { texto: "Treino Corrida", url: "https://docs.google.com/spreadsheets/d/1ox9xsHunk8OR5OHnWwRVvSITRzZZxZhRkwqHZTxFCPo/edit?usp=sharing" },
                
            ],
            testes:[
                {texto: "Histórico de treinos", url: "http://kaioguerrero.com/index"}
            ],
            whats:[
                {texto: "Fale comigo", 
                    url: "https://wa.me/19999472024?text=Me ajuda,%20gostaria%20de%20falar%20sobre%20o%20meu%20treinamento" }
            ],
            
        },
        "Helen": {
            nome: "Helen Kuhl",
            foto: "../galeria/helen.png",
            grafico:"../galeria/testes.png",
            nascimento: "1994-09-20",
            plano: "Consultoria de treino",
            frequencia: "2x semana",
            numero: "#1/2025",
            foco: "Cuidado com a alimentação",
            dataProducao: "11/01",
            
            objetivo_principal: "Emagrecer",
            treinos: [
                {texto: "Treino  Braço", url: "http://kaioguerrero.com/atletas/Helen_a"},
                {texto: "Treino  Perna", url: "http://kaioguerrero.com/atletas/Helen_b"},
                
            ],
            testes:[
                {texto: "Histórico de treinos", url: "http://kaioguerrero.com/index"}
            ],
            whats:[
                {texto: "Fale comigo", 
                    url: "https://wa.me/19999472024?text=Me ajuda,%20gostaria%20de%20falar%20sobre%20o%20meu%20treinamento" }
            ],
            
        },
        "nathipg": {
            nome: "Nathália Pissuti",
            foto: "../galeria/nathalia.jpg",
            grafico:"../galeria/testes.png",
            nascimento: "1996-05-12",
            plano: "Presencial 1x por semana / 3x lição de casa",
            frequencia: "4x semana",
            numero: "#1/2025",
            foco: "Bora lá que você consegue",
            dataProducao: "29/12",
            
            objetivo_principal: "Fortalecimento geral, fortalecimento específico de músculos para forçar menos o joelho, melhora da postura",
            treinos: [
                { texto: "Treino A", url: "http://kaioguerrero.com/atletas/nathipg_a" },
                { texto: "Treino B", url: "http://kaioguerrero.com/atletas/nathipg_b" },
                { texto: "Treino Todo dia senão morre", url: "http://kaioguerrero.com/atletas/nathipg_c" },
            ],
            testes:[
                {texto: "Histórico de treinos", url: "https://docs.google.com/spreadsheets/d/e/2PACX-1vRL91_7QgDkLA_Iw4H6zD-A_qYF_Ln_QLPgXXFpUhi6nwLlzQ5qbp3eF-R18Ve9CHxXZzDDUZ76vS85/pubhtml?gid=308239942&single=true"}
            ],
            whats:[
                {texto: "Fale comigo", 
                    url: "https://wa.me/19999472024?text=Me ajuda,%20gostaria%20de%20falar%20sobre%20o%20meu%20treinamento" }
            ],
            
        },
        "Marinaggm": {
            nome: "Marina Maza",
            foto: "../galeria/mazza.png",
            grafico:"../galeria/mazzat.png",
            nascimento: "1990-02-16",
            plano: "Presencial 2x por semana/ 2x academia",
            frequencia: "4x semana",
            numero: "#1/2025",
            foco: "Cuidado com a lombar",
            dataProducao: "29/12",
            objetivo_principal: "Treinos focados em emagrecimento, saúde e condicionamento",
            treinos: [
                { texto: "Treino A", url: "http://kaioguerrero.com/atletas/Marinaggm_a" },
                { texto: "Treino B", url: "http://kaioguerrero.com/atletas/Marinaggm_b" },
                { texto: "Treino C", url: "http://kaioguerrero.com/atletas/Marinaggm_c" },
                { texto: "Treino D", url: "http://kaioguerrero.com/atletas/Marinaggm_d" },
            ],
            testes:[
                {texto: "Histórico de treinos", url: "https://docs.google.com/spreadsheets/d/e/2PACX-1vRL91_7QgDkLA_Iw4H6zD-A_qYF_Ln_QLPgXXFpUhi6nwLlzQ5qbp3eF-R18Ve9CHxXZzDDUZ76vS85/pubhtml?gid=1551563165&single=true"}
            ],
            whats:[
                {texto: "Fale comigo", 
                    url: "https://wa.me/19999472024?text=Me ajuda,%20gostaria%20de%20falar%20sobre%20o%20meu%20treinamento" }
            ],
            
        },
        "S2_A_ALUNA_MAIS_LINDA_DO_UNIVERSO": {
            nome: "Marilia Pimenta",
            foto: "../galeria/marilia.jpg",
            grafico:"../galeria/mazzat.png",
            nascimento: "1995-02-05",
            plano: "Planilha de treino",
            frequencia: "4x semana",
            numero: "#1/2025",
            foco: "Cuidado com a execução de exercício",
            dataProducao: "11/1",
            objetivo_principal: "Treinos focados em fortalecimento, reabilitação, saúde e condicionamento",
            treinos: [
                { texto: "Treino A", url: "http://kaioguerrero.com/atletas/S2_A_ALUNA_MAIS_LINDA_DO_UNIVERSO_a" },
                { texto: "Treino B", url: "http://kaioguerrero.com/atletas/S2_A_ALUNA_MAIS_LINDA_DO_UNIVERSO_b" },
                { texto: "Treino Faça todo dia", url: "http://kaioguerrero.com/atletas/S2_A_ALUNA_MAIS_LINDA_DO_UNIVERSO_c" },
            ],
            testes:[
                {texto: "Histórico de treinos", url: "http://kaioguerrero.com/index"}
            ],
            whats:[
                {texto: "Fale comigo", 
                    url: "https://wa.me/19999472024?text=Me ajuda,%20gostaria%20de%20falar%20sobre%20o%20meu%20treinamento" }
            ],
            
        },
        "Simioni": {
            nome: "Marcelo  Simioni",
            foto: "../galeria/simioni.jpeg",
            grafico:"../galeria/testes.png",
            nascimento: "1990-07-28",
            plano: "Presencial 2x por semana/ 2x academia",
            frequencia: "4x semana",
            numero: "#1/2025",
            foco: "Para de ficar lavando couve",
            dataProducao: "29/12",
            

            objetivo_principal: "Treinos focados em emagrecimento, saúde e prevenção de lesão",
            treinos: [
                { texto: "Treino A", url: "http://kaioguerrero.com/atletas/Simioni_a" },
                { texto: "Treino B", url: "http://kaioguerrero.com/atletas/Simioni_b" },
                { texto: "Treino C", url: "http://kaioguerrero.com/atletas/Simioni_c" },
                { texto: "Treino D", url: "http://kaioguerrero.com/atletas/Simioni_d" },
            ],
            testes:[
                {texto: "Histórico de treinos", url: "https://docs.google.com/spreadsheets/d/e/2PACX-1vRL91_7QgDkLA_Iw4H6zD-A_qYF_Ln_QLPgXXFpUhi6nwLlzQ5qbp3eF-R18Ve9CHxXZzDDUZ76vS85/pubhtml?gid=2026510662&single=true"}
            ],
            whats:[
                {texto: "Fale comigo", 
                    url: "https://wa.me/19999472024?text=Me ajuda,%20gostaria%20de%20falar%20sobre%20o%20meu%20treinamento" }
            ],
            
        },
        "rafmbr": {
            nome: "Rafael de Menezes Barros",
            foto: "../galeria/rafael.png",
            grafico:"../galeria/testes.png",
            nascimento: "1988-08-09",
            plano: "Consultoria de treino",
            frequencia: "4x semana",
            numero: "#1/2025",
            foco: "Grandes resultados começam com uma simples escolha",
            dataProducao: "29/12",

            objetivo_principal: "Condicionamento físico geral",
            treinos: [
                {texto: "Treino A ", url: "http://kaioguerrero.com/atletas/rafmbr_a" },
                {texto: "Treino B ", url: "http://kaioguerrero.com/atletas/rafmbr_b"},
                {texto: "Treino C ", url: "http://kaioguerrero.com/atletas/rafmbr_c"},
                {texto: "Treino D ", url: "http://kaioguerrero.com/atletas/rafmbr_d"},
                
            ],
            testes:[
                {texto: "Histórico de treinos", url: "https://docs.google.com/spreadsheets/d/e/2PACX-1vRL91_7QgDkLA_Iw4H6zD-A_qYF_Ln_QLPgXXFpUhi6nwLlzQ5qbp3eF-R18Ve9CHxXZzDDUZ76vS85/pubhtml?gid=1506518616&single=true"}
            ],
            whats:[
                {texto: "Fale comigo", 
                    url: "https://wa.me/19999472024?text=Me ajuda,%20gostaria%20de%20falar%20sobre%20o%20meu%20treinamento" }
            ],
            
        }
    };

    // Pega a URL para determinar o atleta
    const atletaId = window.location.pathname.split("/").pop().split(".")[0];
    const atleta = atletas[atletaId];

    if (!atleta) {
        window.location.href = "../index.html";
        return;
    }
    
    const calcularIdade = (nascimento) => {
        const dataNascimento = new Date(nascimento);
        const hoje = new Date();
        let idade = hoje.getFullYear() - dataNascimento.getFullYear();
        if (
            hoje.getMonth() < dataNascimento.getMonth() ||
            (hoje.getMonth() === dataNascimento.getMonth() && hoje.getDate() < dataNascimento.getDate())
        ) {
            idade--;
        }
        return idade;
    };

    const idade = calcularIdade(atleta.nascimento);

    const atletaHTML = `
        <div class="card-container">
    <div class="card">
        <div class="card-front">
            <header class="card-header">
                <h1>${atleta.nome}</h1>
            </header>
            <div class="card-body">
                <img src="${atleta.foto}" alt="Foto do atleta ${atleta.nome}" class="foto">
                <p><b>Idade:</b> ${idade} anos</p>
                <p><b>Plano:</b> ${atleta.plano}</p>
                <p><b>Frequência:</b> ${atleta.frequencia}</p>
                <p><b>Treino Número:</b> ${atleta.numero}</p>
                <p><b>Foco:</b> ${atleta.foco}</p>
                <p><b>Produção:</b> ${atleta.dataProducao}</p>
                <div class="acoes">
                    ${atleta.treinos.map(link => `<a href="${link.url}" class="botao">${link.texto}</a>`).join('')}
                </div>
                </br>
               
                
</a>
            </div>
            <div class="flip-indicator">↩ </div>
        </div>
        <div class="card-back">
        <header class="card-header">
                <h1>Objetivos</h1>
            </header>
            <div class="info">
                
                <p> ${atleta.objetivo_principal}</p>
                <div class="acoes">
                    ${atleta.testes.map(link => `<a href="${link.url}" class="acoes b">${link.texto}</a>`).join('')}
                </div>
                <img src="${atleta.grafico}" alt="Foto do atleta ${atleta.nome}" class="foto">
         
                 <div class=" whatss">
                    ${atleta.whats.map(link => `<a href="${link.url}" class="botao">${link.texto}</a>`).join('')}
                </div>
            </div>
           
            <div class="flip-indicator">↩ </div>
        </div>
    </div>
</div>
    `;

    const atletaMain = document.getElementById("atletaMain");
    atletaMain.innerHTML = atletaHTML;

    // const card = document.querySelector(".card");
    // card.addEventListener("click", () => {
    //     card.classList.toggle("flipped");
    // });
    
});

document.addEventListener("DOMContentLoaded", function () {
    const card = document.querySelector(".card");
    const link = card.querySelector("a");  // Selecionando o link dentro do card

    // Quando o link for clicado, impedir que o card vire e acessar diretamente o link
    if (link) {
        link.addEventListener("click", function (e) {
            e.stopPropagation();  // Previne que o evento de clique no link propague para o card (impedindo o flip)
            window.location.href = link.href;  // Redireciona diretamente para o link
        });
    }

    // Agora o card realiza o flip em qualquer clique que não seja no link
    card.addEventListener("click", (e) => {
        if (!e.target.closest("a")) {  // Se o clique não for dentro de um link, realiza o flip
            card.classList.toggle("flipped");
        }
    });
});

