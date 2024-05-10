# Binance Realtime API Dashboard

Este projeto é parte de um processo seletivo para a vaga de desenvolvedor web sênior na empresa Allintra. O objetivo é desenvolver um dashboard que se conecte à API da Binance para monitorar e exibir em tempo real o último preço e a flutuação percentual dos preços de criptomoedas específicas desde que a dashboard foi aberta.

## Instalação e Execução

1. Certifique-se de ter o Node.js instalado em sua máquina.
2. Clone o repositório do projeto.
3. Navegue até o diretório do projeto no terminal.
4. Execute `npm install` para instalar as dependências.
5. Para executar o projeto no modo de desenvolvimento, use o comando `npm run dev`.
6. Para executar o projeto no modo de produção, primeiro, construa o projeto com `npm run build` e, em seguida, execute `npm run start`.

## Documentação da API da Binance

- [Websocket Market Streams – Binance API Documentation](https://binance-docs.github.io/apidocs/spot/en/#websocket-market-streams)

Este projeto é desenvolvido utilizando React, Next.js, TypeScript, Tailwind CSS e Redux.

## Requisitos Técnicos

### Front-End

- Utilizar ReactJS para construir a interface do usuário.
- Implementar uma visualização responsiva, adequada para desktops e dispositivos móveis.

### Conexão com a API da Binance

- Utilizar Websockets para conectar-se à API da Binance e obter atualizações em tempo real dos preços das criptomoedas: Bitcoin (BTC), Ethereum (ETH), Solana (SOL) e Dogecoin (DOGE).

### Funcionalidades do Dashboard

- Exibir o último preço em USDT para cada uma das criptomoedas.
- Calcular e mostrar o percentual de mudança do preço desde a abertura do dashboard para cada criptomoeda.
- Atualizar estes dados em tempo real conforme as novas informações são recebidas via Websocket.
