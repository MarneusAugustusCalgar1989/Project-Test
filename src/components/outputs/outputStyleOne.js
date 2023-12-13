export const testStyle = `<style>
    

    .test-preview-holder-beauty :first-child {
      display: flex;
    }

    .test-preview-holder-beauty:before{
    display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      

    }

    .test-preview-holder-beauty {
      background-color: azure;
      min-height: 100vh;
      width: 500px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      color: cadetblue;
      text-align:center;
      
      animation: fade-in 0.5s ease-in-out 1;
    }

    .tCardBeauty {
      width: 90%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin-top: 1rem;
      margin-bottom: 1rem;

      -webkit-box-shadow: 7px 3px 8px 0px rgba(34, 60, 80, 0.2);
      -moz-box-shadow: 7px 3px 8px 0px rgba(34, 60, 80, 0.2);
      box-shadow: 7px 3px 8px 0px rgba(34, 60, 80, 0.2);
      display: none;

      transition: all 1s ease-in-out;
    }

    .lets-play-button {
      width: 20rem;
      padding: 2rem;
      font-size: 2rem;
      color: azure;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      background-color: rgb(161, 224, 226);
      margin-top: -2rem;
      margin-bottom: 2rem;
      border-radius: 10px;
      -webkit-box-shadow: 7px 3px 8px 0px rgba(34, 60, 80, 0.2);
      -moz-box-shadow: 7px 3px 8px 0px rgba(34, 60, 80, 0.2);
      box-shadow: 7px 3px 8px 0px rgba(34, 60, 80, 0.2);
      cursor: pointer;
      transition: all 1s ease-in-out;
    }

    .lets-play-button:hover {
      transform: scale(1.2);
    }

    .lets-play-button:active {
      transform: scale(1);
      background-color: azure;
      color: cadetblue;

      -webkit-box-shadow: 4px -4px 25px 0px rgba(34, 60, 80, 0.2) inset;
      -moz-box-shadow: 4px -4px 25px 0px rgba(34, 60, 80, 0.2) inset;
      box-shadow: 4px -4px 25px 0px rgba(34, 60, 80, 0.2) inset;
    }

    .iCard {
      background-color: rgb(161, 224, 226);
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin-bottom: -2rem;
    }

    .iCard img {
      width: 95%;
      margin-bottom: 1rem;
      margin-top: 1rem;
      border-radius: 10px;
    }

    .qCard {
      width: 95%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin-bottom: 1rem;
      cursor: default;
      border-radius: 10px;
      padding: 2rem;

      background-color: cadetblue;
      color: white;
      font-size: 2rem;
    }

    .qCard.result {
      padding: 0.5rem;
      margin-top: 1rem;
      min-height: 7rem;
      -webkit-box-shadow: 7px 3px 8px 0px rgba(34, 60, 80, 0.2);
      -moz-box-shadow: 7px 3px 8px 0px rgba(34, 60, 80, 0.2);
      box-shadow: 7px 3px 8px 0px rgba(34, 60, 80, 0.2);
    }

    .aCard {
      width: 80%;
      min-height: 5rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin-bottom: 1rem;
      cursor: pointer;
      border-radius: 10px;

      background-color: rgb(161, 224, 226);
      color: aliceblue;
      font-size: 1.5rem;
    }

    .aCardresult {
      width: 80%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      border-radius: 10px;
      background-color: rgb(161, 224, 226);
      color: aliceblue;
      font-size: 1.5rem;

      margin-bottom: -15rem;
      min-height: 7rem;
      -webkit-box-shadow: 7px 3px 8px 0px rgba(34, 60, 80, 0.2);
      -moz-box-shadow: 7px 3px 8px 0px rgba(34, 60, 80, 0.2);
      box-shadow: 7px 3px 8px 0px rgba(34, 60, 80, 0.2);
    }

    .aCard:hover {
      -webkit-box-shadow: 7px 3px 8px 0px rgba(34, 60, 80, 0.2);
      -moz-box-shadow: 7px 3px 8px 0px rgba(34, 60, 80, 0.2);
      box-shadow: 7px 3px 8px 0px rgba(34, 60, 80, 0.2);
    }

    .aCard:active {
      background-color: cadetblue;

      -webkit-box-shadow: 4px -4px 25px 0px rgba(34, 60, 80, 0.2) inset;
      -moz-box-shadow: 4px -4px 25px 0px rgba(34, 60, 80, 0.2) inset;
      box-shadow: 4px -4px 25px 0px rgba(34, 60, 80, 0.2) inset;
    }

    .reset {
      margin-top: 6rem;
      margin-bottom: 5rem;
    }

    .card-in {
      background-color: pink;
    }

    .beauty-again-button {
      margin-top: 5rem;
    }

    .itog {
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    .test-card-result-holder {
      background-color: red;
    }

    .ancor-block {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin-top: 7rem;
    }

    .fade-in-item {
      animation: fade-in 0.5s ease-in-out;
    }

    .fade-out-item {
      animation: fade-out 1s ease-in-out 1;
    }

    .el-out {
      animation: fade-out 0.5s ease-in-out;
    }
    .testQuery {
      display: none;
      margin-top: 3rem;
    }

    @keyframes fade-in {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }

    @keyframes fade-out {
      from {
        opacity: 1;
      }
      to {
        opacity: 0;
      }
    }
  </style>`;
