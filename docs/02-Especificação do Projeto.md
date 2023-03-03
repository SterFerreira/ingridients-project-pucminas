# Especificações do Projeto

Os pontos mais relevantes a serem tratados neste projeto foram abordados e exemplificados através de personas fictícias e suas respectivas histórias, expondo casos comuns dos problemas levantados na pesquisa, que foram elaborados a partir do conhecimento comum e vivência dos membros da equipe.

## Personas

|<h3>**Lucas**</h3> |  ||
| ------------------------------------------------------- | -------------------| ---------|
|![Foto Lucas](img/personas/Lucas.jpg)| **Idade:** 22 | “Um sistema para a modernidade seria um tremendo diferencial.” |
**Motivação:**  Quer economizar com receitas simples e que ajude o seu tempo.| **Frustrações:**  Não tem tempo para cozinhar e seus gastos estão exagerados com alimentos de "Fast Food". |  **História:** Desenvolvedor que mora sozinho e passa a maior parte do seu dia trabalhando em seu escritório na sua própria casa. Sem tempo para fazer suas próprias refeições, Lucas percebe uma carência de receitas fáceis e práticas para pessoas que estão precisando otimizar o seu tempo e maximizar os resultados.
| |  |  |

|<h3>**Márcio**</h3> |  ||
| ------------------------------------------------------- | -------------------| ---------|
|![Foto Márcio](img/personas/Marcio.jpg)| **Idade:** 52 | “Sistema Prático e ágil para pessoas de todas as idades.” |
**Motivação:** "Com a inovação e os livros sendo deixados de lado, gostaria de um sistema de receitas."| **Frustrações:**  Sistemas são complexos demais. |  **História:** Senhor que se encontra aposentado e tem dificuldades de encontrar receitas relacionadas ao seu gosto culinário e também com as novas tecnologias, por isso quer um sistema fácil e prático de se usar. Além disso, quer poder compartilhar suas receitas com outras pessoas.
| |  |  |

|<h3>**Maria**</h3> |  ||
| ------------------------------------------------------- | -------------------| ---------|
|![Foto Maria](img/personas/Maria.jpg)| **Idade:** 40 | “Sistema que me ajude com meus ingredientes.” |
**Motivação:** "Tempo predominante em meu negócio ."| **Frustrações:**  Não ter conhecimento em culinária. |  **História:** Empresária que mora sozinha e que tem uma renda mensal volátil devido ao clima dos negócios, sendo assim tem pouco tempo e conhecimento para saber o que pode fazer com os ingredientes disponibilizados em casa.
| |  |  |

## Histórias de Usuários

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Lucas|Encontrar receitas práticas e detalhadas.|Economizar tempo ao cozinhar.
|Márcio|Pesquisar receitas conhecidas.|Modernizar a forma que usa receitas.
|Maria|Pesquisar receitas a partir dos ingredientes.|Poder fazer receitas com os ingredientes que tem em casa.
|Maria|Salvar as receitas numa lista de desejos.|Poder encontrar facilmente as receitas que gostou.
|Márcio|Filtrar e ordenar suas pesquisas.|Encontrar mais facilmente o que pesquisa.
|Márcio|Compartilhar suas receitas.|Para ajudar a comunidade.
|Márcio|Comentar e avaliar receitas.|Para interagir com outros usuários com gostos em comum.

## Modelagem do Processo de Negócio 

Os processos abaixo descrevem a ordem de execução lógica de cada função do sistema.

### Descrição Geral da Proposta

Apresente aqui uma descrição da sua proposta abordando seus limites e suas ligações com as estratégias e objetivos do negócio. Apresente aqui as oportunidades de melhorias.

#### Autenticação de usuário
Dependência dos seguintes requisitos: RF-004, RF-005, RF-006, RF-008 e RF-009.

![Diagrama de Autenticação do Usuário](img/processos/autenticacao.jpg)

#### Buscar receitas
Abrange os requisitos: RF-001, RF-002, RF-003, RF-007.

![Diagrama de Buscar receitas](img/processos/buscar_receitas.png)

#### Inserir novas receitas
Abrange o requisito: RF-004.

![Diagrama de Inserir Novas Receitas](img/processos/inserir_receitas.png)

#### Interação com receitas próprias
Abrange os requisitos: RF-005 e RF-006.

![Diagrama de Interação com receitas próprias](img/processos/interacao_receitas.jpg)

#### Salvar receita em lista de desejos
Abrange o requisito: RF-008.

![Diagrama de Salvar receita em lista de desejos](img/processos/lista_desejo.png)

#### Avaliar receitas
Abrange o requisito: RF-009.

![Diagrama de Avaliar receitas](img/processos/avaliar_receita.png)

#### Comentar receitas
Abrange o requisito: RF-009.

![Diagrama de Comentar receitas](img/processos/comentar_receitas.png)


#### Notificar autor da receita
Abrange o requisito: RF-010.

![Diagrama de Notificar autor da receita](img/processos/notificar_autor.png)

## Indicadores de Desempenho

#### Data/Tempo postagem
![PrimeiroKPI](img/KPI%201.png)

#### Data/Pessoas simultâneas
![PrimeiroKPI](img/KPI%202.png)

#### Contagem Avaliações
![PrimeiroKPI](img/KPI%203.png)

#### Data/Receitas Postadas
![PrimeiroKPI](img/KPI%204.png)

#### Indicar público masculino / feminino
![PrimeiroKPI](img/KPI%205.png)

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| A aplicação deverá exibir receitas de forma listada e detalhada. | ALTA |
|RF-002| A aplicação deverá permitir buscar receitas pela semelhança com seu nome e descrição. | ALTA |
|RF-003| A aplicação deverá permitir buscar receitas de acordo com uma lista de ingredientes inserida pelo usuário. | ALTA | 
|RF-004| A aplicação deverá permitir que o usuário insira novas receitas. | MÉDIA |
|RF-005| A aplicação deverá listar as receitas publicadas ao usuário que a publicou. | MÉDIA |
|RF-006| A aplicação deverá permitir o autor de uma receita alterá-la ou deletá-la. | MÉDIA |
|RF-007| A aplicação deverá permitir ordenar e filtrar o resultado da busca. | BAIXA |
|RF-008| A aplicação deverá permitir que as receitas sejam salvas em uma lista de desejos. | BAIXA |
|RF-009| A aplicação deverá permitir avaliar e comentar receitas de outro usuário | BAIXA |
|RF-010| A aplicação deverá notificar o usuário quando alguém interagir com sua receita (avaliação e comentário). | BAIXA |

### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| A aplicação deve ser compatível com sistemas Android e iOS | ALTA |
|RNF-002| O projeto deverá ser feito com a tecnologia React Native. | ALTA |
|RNF-003| A aplicação deve possuir interface intuitiva. | MÉDIA |

## Restrições

As questões que limitam a execução desse projeto e que se configuram como obrigações claras para o desenvolvimento do projeto em questão são apresentadas na tabela a seguir

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Só poderão ser utilizados programas gratuitos ou fornecidos pela PUC Minas |

## Diagrama de Casos de Uso

Os casos de uso mostrando os Requisitos Funcionais para a aplicação são ilustrados abaixo.

![Diagrama de Casos de Uso](img/diagrama_de_caso_de_uso.png)

# Matriz de Rastreabilidade

![Matriz de Rastreabilidade](img/Rastreabilidade.jpg)

# Gerenciamento de Projeto

## Gerenciamento de Tempo

![PGCR - Plano de Gerenciamento do Cronograma](img/Gerenciamento%20do%20Cronograma-1.png)

![Gráfico de Gantt](img/gantt.jpg)
<a href="img/gantt.jpg" target="_blank">Clique aqui para abrir em nova aba</a>

## Gerenciamento de Equipe

![PGRH - Plano de Gerenciamento dos Recursos Humanos](img/Gerenciamento%20de%20RH_%20Pessoal-1.png)

## Gestão de Orçamento

![PGCS - Plano de Gerenciamento dos Custos](img/Plano%20de%20Gerenciamento%20dos%20Custos-1.png)
![Orçamento](img/Orcamento1.jpg)
