# Plano de Testes de Software

Está seção detalha o planejamentos do processo de realização dos Testes de Software.

|Caso de Teste | CT-01 - Funcionamento do Usuário|
|:--|:--|
|**Requisitos Associados**|RF-001 - A aplicação irá mostrar as ultimas receitas cadastradas. <br/> RF-002 - A aplicação deverá filtar as aplicações conforme os ingredientes escolhidos pelo cliente.|
|**Objetivo do teste**| Verificar e testar a aparição das receitas e filtro pelos ingredientes selecionados. |
|**Passos**|1 - Acessar a aplicação e deverá aparecer as ultimas receitas cadastradas. <br/>2 - ir até a barra de navegação e escolher os ingredientes desejados<br/>3 -deverá aparecer as receitas baseadas nos ingredientes selecionados.|
|**Critérios de Êxito**| As ultimas receitas cadastradas deverão aparecer com sucesso. Após selecionar os ingredientes as receitas deverão ser filtradas com forme os ingredientes selecionados.|

|Caso de Teste | CT-02 - Funcionamento das Mais Informações das Receitas |
|:--|:--|
|**Requisitos Associados**|RF-003 - Após selecionar a receita, deverá aparecer mais detalhes sobre ela. <br/> RF-004 - Deverá especificar os ingredientes e uso e o modo de preparo <br/> RF-005 - Deverá exibir a imagem da finalização da receita|
|**Objetivo do teste**| Verificar se as informações detalhadas da receita irá ser exibida, deverá exibir as informações de preparo e os ingredientes necessários, deverá exibir a imagem final de preparo. |
|**Passos**|1 - Acessar a Aplicação.<br/>2 - Acessar a receita escolhida.<br/>3 - Deverá aparecer as informações da receita.<br/>4 - Acessar a imagem para dar zoom caso queira.|
|**Critérios de Êxito**| O usuário deverá acessar a aplicação e acessar a receita desejada em seguida deverá ter acesso as informações detalhadas da receita e a imagem, caso necessário o usuário poderá dar zoom na imagem para melhor visualização. |

|Caso de Teste | CT-03 - Verificação do filtro |
|:--|:--|
|**Requisitos Associados**|RF-007 - Deverá acessar a barra de pesquisa <br/> RF-008 - Poderá selecionar os ingredientes que deseja utilizar<br/> RF-009 - Irá aparecer as receitas com o uso daqueles ingredientes<br/> RF-010 - Caso não encontre as receitas com os ingredientes escolhidos irá ter um retorno para o usuário explicando.
|**Objetivo do teste**|Filtrar as receitas pelos ingredientes escolhidos por cliente, caso não tenha as receitas a aplicação deverá informar para o usuário. |
|**Passos**| 1 - Acessar a aplicação<br/> 2 - Acessar a barra de pesquisas<br/> 3 - selecionar os ingredientes que deseja<br/> 4 - Clicar na opção de buscar<br/> 5 - Irá aparecer as receitas com o uso dos ingredientes|
|**Critérios de Êxito**| Seção de fácil funcionalidade, o usuário irá escolher os ingredientes que deseja e a aplicação irá filtrar todas as receitas que usam estes ingredientes, caso não tenha a receita com os ingredientes a aplicação irá dar o devido retorno para o usuário. |

|Caso de Teste | CT-04 - Adicionar comentário na receita |
|:--|:--|
|**Pré-Condições**| O Usuário precisa estar logado na aplicação |
|**Requisitos Associados**|RF-011 - O usuário poderá adicionar comentários nas receitas.<br/> RF-012 - O usuário só poderá adicionar comentários.<br/> RF-013 - O Comentário aparecerá para todos os usuários da aplicação.|
|**Objetivo do teste**|Adicionar um comentário nas receitas, o comentário será exibido para todos que utilizarem a aplicação independente do status de login.|
|**Passos**|1 - Acessar a aplicação.<br/>2 - Realizar o Login na Aplicação. <br/> 3- Acessar a receita desejada.<br/>4 - Ir até a parte inferior das informações da receita<br/> 5 - ir até a aba de comentários<br/> 6 - Digitar o comentário<br/> 7 - Publicar o comentário.|
|**Critérios de Êxito**|O usuário irá escrever o comentário e publicá-lo, após a aplicação deverá exibir o comentário corretamente para todos os usuários que acessárem a receita.|
