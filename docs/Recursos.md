# 3. Principais Recursos e Funcionalidades

- Contratação de serviços pelo aplicativo 
- Assinatura de contrato de segurança digitalmente 
- Pagamento online
- Escolha do prestador do serviço 
- Avaliação do prestador do serviço 
- Agendamento de serviço 
- Chat com o prestador do serviço.

## 3.1 Requisitos Funcionais

| Referência | Descrição |
|------------|-----------|
| RF.001 | O sistema deve permitir o registro da entrada dos produtos em estoque; |
| RF.002 | O sistema deve permitir o registro da saída dos produtos em estoque; |
| RF.003 | O sistema deve permitir o registro de funcionários; |
| RF.004 | O sistema deve permitir o processamento da Folha de Pagamento |
| RF.005 | O sistema deve permitir informar qual local de limpeza está mais perto da residência do funcionário |
| RF.006 | O sistema deve permitir o controle de status da atividade dos funcionários.

## 3.2 Requisitos Não Funcionais

| Referência | Descrição |
|------------|-----------|
| RN.001 | Para o registro de entrada dos produtos: Onde comprou; Qual produto; Quantidade; Valor unitário; |
| RN.002 | Para o registro de saída dos produtos: Destinatário; Qual produto; Quantidade; Valor unitário; |
| RN.003 | Para ser um funcionário que receba os produtos: Nome completo; CPF; Login; Senha; Quantos trabalhos na semana; Avaliação dos clientes; Quantos produtos usou semana passada; Quantos produtos recebeu semana passada; |
| RN.004 | Para a inclusão de um funcionário são necessários os seguintes dados: Nome Completo; Idade; CPF; RG; E-mail; Telefone; Endereço; Login; Senha; Carga horária; Salário; Conta bancária |
| RN.005 | Ao realizar cadastro, o sistema deve criar o login e senha com base nas informações cedidas pelo usuário |
| RN.006 | Para a alteração dos dados cadastrais, será exigido login e senha do mesmo. |
| RN.007 | Em eventual caso de perda da senha, ela poderá ser recuperada através do e-mail associado ao cadastro. |
| RN.008 | Os dados cadastrais que um funcionário poderá alterar são: Nome Completo; E-mail; Telefone; Endereço; Senha; |
| RN.009 | O sistema deve cumprir com as regras dos direitos trabalhistas para com seus funcionários |
| RN.010 | O cadastro de folha de pagamento deve possuir os seguintes campos: Férias e benefícios; Adicionais e horas extras; Faltas, Licenças e afastamentos; Isenção; Abono de permanência; Abatimento do dobro de teto; Configuração de holerite; Rubrica e tabelas oficiais; Tetos salariais; Constantes de cálculo; |
| RN.011 | A folha de pagamento deve ter seu estado alterado para “fechada”, após ter sido conferida, aprovada e paga; |
| RN.012 | A alteração da folha de pagamento deve ser bloqueada após seu estado ser alterado para “fechada”; |
| RN.013 | O aplicativo deve avaliar se o funcionário precisará ou não de transporte fornecido pela West Limp Service; |
| RN.014 | Após a assinatura do contrato, o funcionário deve ficar ativo no app durante 4 dias úteis; |
| RN.015 | O aplicativo deve informar aos clientes quais serventes de limpeza estão disponíveis; |
| RN.016 | O funcionário não deve recusar mais do que 3 serviços por dia; |
| RN.017 | A alteração do status de atividade deve ser alterada para ‘ausente’, quando o funcionário(a) estiver debilitado para exercer tal função; |
| RN.018 | Após a contratação do funcionário de limpeza feita pelo cliente, o app deve alterar o status do funcionário(a) para: 'Indisponível no momento’; |
| RN.019 | O funcionário deve seguir as regras que estão constatadas no contrato, caso contrário será excluído permanentemente do app. |





