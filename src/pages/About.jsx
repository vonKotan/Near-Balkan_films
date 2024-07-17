import React, { useEffect, useState } from "react";

import { useTranslation } from 'react-i18next';

// Router
import { Link } from "react-router-dom";

// Components

const About = () => {
  const { t, i18n } = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <>
      <body class="bg-nbgreylight mx-auto max-w-screen-sm sm:max-w-screen-sm lg:max-w-screen-xl">
        <header>
          <div class="flex lg:flex-row flex-col lg:justify-between items-center lg:px-11 py-9 max-w-screen-sm sm:max-w-screen-sm lg:max-w-screen-xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="172"
              height="45"
              viewBox="0 0 172 45"
              fill="none"
            >
              <path
                d="M133.191 6.41797H136.925V8.89761L139.374 6.41797H143.72V9.76399H140.2L137.231 12.7515V21.2958H133.191V6.41797Z"
                fill="#186A5C"
              />
              <path
                d="M115.734 18.5473V15.1415L118.55 12.393H126.294V10.5109L125.345 9.58474H120.754L119.836 10.5109V11.3474H115.857V9.64449L119.132 6.41797H126.998L130.273 9.64449V21.2958H126.63V19.1747L124.365 21.2958H118.55L115.734 18.5473ZM124.09 18.2485L126.294 16.1872V15.2013H120.54L119.713 16.0079V17.5017L120.478 18.2485H124.09Z"
                fill="#186A5C"
              />
              <path
                d="M98.0391 18.2485V9.52499L101.192 6.41797H109.792L112.975 9.52499V15.1714H102.079V17.0834L103.059 18.0693H108.047L108.966 17.1432V16.3664H112.945V18.3083L109.914 21.2958H101.13L98.0391 18.2485ZM108.935 12.4229V10.6901L107.894 9.64449H103.12L102.079 10.6901V12.4229H108.935Z"
                fill="#186A5C"
              />
              <path
                d="M80.8438 6.41797H84.5778V8.89761L87.1181 6.41797H92.0458L95.4431 9.73411V21.2958H91.4031V10.8096L90.3624 9.76399H87.7915L84.8838 12.632V21.2958H80.8438V6.41797Z"
                fill="#186A5C"
              />
              <path
                d="M156.918 29.4902H160.652V31.9699L163.192 29.4902H168.12L171.517 32.8064V44.3681H167.477V33.8819L166.437 32.8363H163.866L160.958 35.7043V44.3681H156.918V29.4902Z"
                fill="#186A5C"
              />
              <path
                d="M139.473 41.6196V38.2138L142.288 35.4653H150.032V33.5831L149.083 32.657H144.492L143.574 33.5831V34.4196H139.595V32.7168L142.87 29.4902H150.736L154.011 32.7168V44.3681H150.369V42.2469L148.104 44.3681H142.288L139.473 41.6196ZM147.828 41.3208L150.032 39.2594V38.2735H144.278L143.452 39.0802V40.5739L144.217 41.3208H147.828Z"
                fill="#186A5C"
              />
              <path
                d="M123.164 23.0381H127.204V34.9583H129.867L133.754 29.4911H138.223L133.142 36.6612L138.529 44.369H134.06L129.775 38.3043H127.204V44.369H123.164V23.0381Z"
                fill="#186A5C"
              />
              <path
                d="M115.914 23.0381H119.954V44.369H115.914V23.0381Z"
                fill="#186A5C"
              />
              <path
                d="M98.3125 41.6196V38.2138L101.128 35.4653H108.872V33.5831L107.923 32.657H103.332L102.414 33.5831V34.4196H98.4349V32.7168L101.71 29.4902H109.576L112.851 32.7168V44.3681H109.208V42.2469L106.944 44.3681H101.128L98.3125 41.6196ZM106.668 41.3208L108.872 39.2594V38.2735H103.118L102.291 39.0802V40.5739L103.057 41.3208H106.668Z"
                fill="#186A5C"
              />
              <path
                d="M80.8438 41.1424V23.0381H84.8838V31.5525L87.1181 29.4911H92.6885L95.841 32.5981V41.2619L92.6885 44.369H84.1187L80.8438 41.1424ZM90.6379 41.0229L91.8009 39.8578V34.0023L90.6379 32.8371H87.6384L84.8838 35.5259V39.8578L86.0469 41.0229H90.6379Z"
                fill="#186A5C"
              />
              <path
                d="M0 23.0703H5.58045V26.6198L9.37698 23.0703H16.7413L21.8186 27.8173V44.3675H15.7808V29.3568L14.2256 27.86H10.3833L6.03786 31.9655V44.3675H0V23.0703Z"
                fill="#46BEA4"
              />
              <path
                d="M6.42438 21.2971H0V14.979L4.4607 10.6249L0 6.27083V0H6.47286L10.9093 4.33042L15.3458 0H21.8186V6.27083L17.3579 10.6249L21.8186 14.979V21.2971H15.3943L10.9093 16.9194L6.42438 21.2971Z"
                fill="#186A5C"
              />
              <path
                d="M53.7017 44.3675H47.2773V38.0493L51.738 33.6952L47.2773 29.3411V23.0703H53.7502L58.1867 27.4007L62.6231 23.0703H69.096V29.3411L64.6353 33.6952L69.096 38.0493V44.3675H62.6716L58.1867 39.9897L53.7017 44.3675Z"
                fill="#186A5C"
              />
              <path
                d="M23.6406 39.7168V13.6074H29.5183V25.8866L32.7688 22.9137H40.8729L45.4593 27.3946V39.8892L40.8729 44.37H28.4051L23.6406 39.7168ZM37.8895 39.5445L39.5816 37.8642V29.4195L37.8895 27.7392H33.5258L29.5183 31.6169V37.8642L31.2104 39.5445H37.8895Z"
                fill="#46BEA4"
              />
              <path
                d="M28.1013 10.6249L23.6406 6.27083V0H30.1135L34.5499 4.33042L38.9864 0H45.4593V6.27083L40.9986 10.6249L45.4593 14.979V21.2971H39.0349L34.5499 16.9194L28.1013 10.6249Z"
                fill="#186A5C"
              />
              <path
                d="M51.764 10.6463L47.279 15.0241L53.6792 21.2949L58.2126 16.9408L62.6733 21.2949L69.0977 14.9768L64.6612 10.6463L69.0977 6.31593L62.6733 -0.00222642L58.2126 4.35186L53.7519 -0.00222719L47.279 6.20944L51.764 10.6463Z"
                fill="#46BEA4"
              />
            </svg>
            <div class="border-nbgreymain lg:mx-9 border-t-[3px] lg:w-full max-w-sm h-px"></div>
            <h2 class="font-bold font-h2-title text-2xl text-nbgreendark text-nowrap leading-9">
            {t("about.motto_before-underline")}
              <span  class="underline underline-offset-2 decoration-nbgreenmain">
              {t("about.motto_underline")}
              </span>
              {t("about.motto_after-underline")}
            </h2>
          </div>
        </header>
        <div class="gap-9 grid lg:grid-cols-2 sm:grid-row mx-auto px-11 max-w-fit lg:max-w-screen-xl">
          <div
            id="jobbOszlop"
            class="flex flex-col gap-9 max-w-sm lg:max-w-screen-xl"
          >
            <div
              id="problemaLehetoseg"
              class="flex items-center gap-5 bg-nbgreymain bg-opacity-50 rounded-full w-full h-3"
            >
              <h2 class="bg-nbgreydark outline outline-dashed outline-transparent hover:outline-dahsed hover:outline-nbgreenmain hover:bg-nborangemain active:outline-nbpurplemain active:outline-5 pr-3 pl-3 rounded-lg w-auto max-w-fit font-h2-title text-lg text-nbwhite italic">
                probléma/lehetőség
              </h2>
            </div>
            <div
              id="problemaLehetosegSzoveg"
              class="flex items-center gap-2.5 border-nbgreymain pl-2 border-l-2 border-dashed"
            >
              <div id="szövegek" class="flex flex-col gap-5">
                <p class="mx-2.5 font-h2-title text-nbgreymiddark lg:text-sm">
                  Egyszerre lép fel probléma a filmtermelésben a fogyasztói és
                  készítői oldalon. Létezik egy valós és erős igény a mozgóképes
                  produkciók elkészítésébe való bevonódásra, azonban a nagy
                  stúdiók világszerte nem adnak lehetőséget erre.
                </p>
                <div class="flex lg:flex-row flex-col justify-between gap-5">
                  <div class="pl-2.5">
                    <div class="flex justify-center bg-nbpurplemain -skew-y-12 w-32 box rotate-12">
                      <h2 class="font-bold font-h2-title text-base text-nbwhite lg:text-sm">
                        filmkészítóknek
                      </h2>
                    </div>
                    <p
                      class="my-2.5 flow-root font-p-paragraph text-base text-nbgreymiddark lg:text-sm hyphens-auto"
                      lang="hu"
                    >
                      A pályájuk elején járó filmesek ugyanekkor
                      <a class="font-bold text-nbpurplemain">
                        {" "}
                        nem jutnak forrásokhoz,
                      </a>{" "}
                      és
                      <a class="font-bold text-nbgreydark">
                        {" "}
                        építenek szakmai kapcsolatokat,
                      </a>{" "}
                      így pedig referenciamunkáik sem jönnek létre.
                    </p>
                    <p class="my-2.5 flow-root font-p-paragraph text-base text-nbgreymiddark lg:text-sm">
                      Független filmesek számára a finanszírozáson kívül a
                      <a class="font-bold text-nbgreydark">
                        {" "}
                        potenciális közönség elérése
                      </a>{" "}
                      és a
                      <a class="font-bold text-nbgreydark">
                        {" "}
                        szakmába való betörés
                      </a>{" "}
                      is jelentős
                      <a class="font-bold text-nbgreydark"> nehézséget okoz.</a>
                    </p>
                  </div>
                  <div class="border-nbgreymain pl-6 sm:pl-2.5 border-l-2 border-dashed sm:border-none">
                    <div class="flex justify-center bg-nborangemain -skew-y-12 w-32 box rotate-12">
                      <h2 class="font-bold font-h2-title text-base text-nbwhite lg:text-sm">
                        fogyasztóknak
                      </h2>
                    </div>
                    <p
                      class="my-2.5 flow-root font-p-paragraph text-base text-nbgreymiddark lg:text-sm hyphens-auto"
                      lang="hu"
                    >
                      A fogyasztók számára a
                      <a class="font-bold text-nborangemain"> kultuszfilmek</a>{" "}
                      meghatározó
                      <a class="font-bold text-nborangemain">
                        {" "}
                        identitásképzők
                      </a>
                      , mégis a legtöbb
                      <a class="font-bold text-nbgreydark">
                        {" "}
                        stúdió ellehetetleníti
                      </a>{" "}
                      a bevonódást a termelés folyamatába, miközben
                      <a class="font-bold text-nbgreydark">
                        {" "}
                        a független filmek koncepciói sem kerülnek validálásra.
                      </a>
                    </p>
                    <p class="my-2.5 flow-root font-p-paragraph text-base text-nbgreymiddark lg:text-sm">
                      {" "}
                      A fiatalság itthon kevés
                      <a class="font-bold text-nbgreydark">
                        {" "}
                        hazai/régiós gyártású filmet
                      </a>{" "}
                      fogyaszt, ennek többek között egy ezeket
                      <a class="font-bold text-nbgreydark">
                        {" "}
                        felsorakoztató, kiemelő platform hiánya.
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              id="market"
              class="flex items-center bg-nbgreymain bg-opacity-50 rounded-full w-full h-3"
            >
              <h2 class="bg-nbgreydark pr-3 pl-3 rounded-lg w-auto max-w-fit font-h2-title text-lg text-nbwhite italic">
                piac
              </h2>
            </div>
            <div class="flex lg:flex-row flex-col gap-6 -translate-y-5">
              <div class="flex flex-col items-center gap-7">
                <div class="flex flex-col items-center">
                  <h2 class="font-bold font-h2-title text-nbgreydark text-nowrap text-xl lg:text-lg">
                    Video on Demand
                  </h2>
                </div>
                <div class="relative flex flex-row justify-center items-end gap-2 -translate-y-4">
                  <div class="top-0 left-0 box-border absolute flex justify-center border-nbgreymain border-t-2 border-l-2 border-dashed min-w-[267px] min-h-20 -translate-y-3 translate-x-3 box">
                    <h2 class="font-bold font-h2-title text-lg text-nbgreenmain text-nowrap">
                      CAGR +15,5%
                    </h2>
                  </div>
                  <div
                    id="diagrammok"
                    class="flex flex-col items-center gap-1 m-1"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="17"
                      height="40"
                      viewBox="0 0 17 40"
                      fill="none"
                    >
                      <path
                        d="M8.75 31.9082L8.75 8.6058"
                        stroke="#45BFA4"
                        stroke-width="16"
                        stroke-linecap="round"
                      />
                    </svg>
                    <span class="text-[8px] text-nbgreydark">2024</span>
                  </div>
                  <div class="flex flex-col items-center gap-1 m-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="17"
                      height="45"
                      viewBox="0 0 17 45"
                      fill="none"
                    >
                      <path
                        d="M8.25 36.9082L8.25 8.6369"
                        stroke="#45BFA4"
                        stroke-width="16"
                        stroke-linecap="round"
                      />
                    </svg>
                    <span class="text-[8px] text-nbgreydark">2025</span>
                  </div>
                  <div class="flex flex-col items-center gap-1 m-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="17"
                      height="51"
                      viewBox="0 0 17 51"
                      fill="none"
                    >
                      <path
                        d="M8.75 42.9082L8.75 8.98264"
                        stroke="#45BFA4"
                        stroke-width="16"
                        stroke-linecap="round"
                      />
                    </svg>
                    <span class="text-[8px] text-nbgreydark">2026</span>
                  </div>
                  <div class="flex flex-col items-center gap-1 m-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="17"
                      height="58"
                      viewBox="0 0 17 58"
                      fill="none"
                    >
                      <path
                        d="M8.25 49.9082L8.24999 8.79218"
                        stroke="#45BFA4"
                        stroke-width="16"
                        stroke-linecap="round"
                      />
                    </svg>
                    <span class="text-[8px] text-nbgreydark">2027</span>
                  </div>
                  <div class="flex flex-col items-center gap-1 m-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="17"
                      height="65"
                      viewBox="0 0 17 65"
                      fill="none"
                    >
                      <path
                        d="M8.75 56.9082L8.75 8.41864"
                        stroke="#45BFA4"
                        stroke-width="16"
                        stroke-linecap="round"
                      />
                    </svg>
                    <span class="text-[8px] text-nbgreydark">2028</span>
                  </div>
                  <div class="flex flex-col items-center gap-1 m-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="17"
                      height="75"
                      viewBox="0 0 17 75"
                      fill="none"
                    >
                      <path
                        d="M8.25 66.9082L8.24999 8.48084"
                        stroke="#45BFA4"
                        stroke-width="16"
                        stroke-linecap="round"
                      />
                    </svg>
                    <span class="text-[8px] text-nbgreydark">2029</span>
                  </div>
                  <div class="flex flex-col items-center gap-1 m-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="17"
                      height="86"
                      viewBox="0 0 17 86"
                      fill="none"
                    >
                      <path
                        d="M8.75 77.9082L8.74999 8.00098"
                        stroke="#45BFA4"
                        stroke-width="16"
                        stroke-linecap="round"
                      />
                    </svg>
                    <span class="text-[8px] text-nbgreydark">2030</span>
                  </div>
                  <div class="flex flex-col items-center gap-1 m-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="17"
                      height="101"
                      viewBox="0 0 17 101"
                      fill="none"
                    >
                      <path
                        d="M8.25 92.9082L8.24999 8.43698"
                        stroke="#45BFA4"
                        stroke-width="16"
                        stroke-linecap="round"
                      />
                    </svg>
                    <span class="text-[8px] text-nbgreydark">2031</span>
                  </div>
                  <div class="flex flex-col items-center gap-1 m-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="17"
                      height="114"
                      viewBox="0 0 17 114"
                      fill="none"
                    >
                      <path
                        d="M8.75 105.908L8.74999 8.07235"
                        stroke="#45BFA4"
                        stroke-width="16"
                        stroke-linecap="round"
                      />
                    </svg>
                    <span class="text-[8px] text-nbgreydark">2032</span>
                  </div>
                </div>
                <div
                  id="tamSamSom"
                  class="flex flex-col justify-center bg-nbgreenlight p-4 rounded-md min-w-56 min-h-48 -translate-y-5 box"
                >
                  <p class="flex flex-row items-center font-bold font-p-paragraph text-nbgreydark text-xs">
                    <a class="text-lg">$114B</a>
                    <a class="opacity-50 mx-1 text-md"> // </a>
                    <a class="text-md">TAM</a>
                  </p>
                  <p class="mb-2 font-p-paragraph text-nbgreydark text-nowrap text-xs">
                    a világ online (VoD) film- & TV-fogyasztói
                  </p>
                  <div class="flex flex-col bg-nbwhite p-4 rounded-md min-w-48 min-h-28 box">
                    <p class="flex flex-row items-center font-bold font-p-paragraph text-nbgreydark text-xs">
                      <a class="text-lg">$23B</a>
                      <a class="opacity-50 mx-1 text-md"> // </a>
                      <a class="text-md">SAM</a>
                    </p>
                    <p class="mb-2 font-p-paragraph text-nbgreydark text-xs">
                      európai Video-on-Demand film- & sorozatfogyasztók
                    </p>
                    <div class="flex flex-col bg-nbgreenmain p-4 rounded-md min-w-40 min-h-8 box">
                      <p class="flex flex-row items-center font-bold font-p-paragraph text-nbgreydark text-xs">
                        <a class="text-lg">$500M</a>
                        <a class="opacity-50 mx-1 text-md"> // </a>
                        <a class="text-md">SOM</a>
                      </p>
                      <p class="font-p-paragraph text-nbgreydark text-nowrap text-xs">
                        térségi fiatal filmkedvelők
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="flex flex-col border-l-2 border-dashed">
                <p class="mx-6 my-2.5 font-p-paragraph text-base text-nbgreymiddark lg:text-sm">
                  Kezdetben a hazai és térségi filmfogyasztók, akik képesek és
                  hajlandóak pénzt fizetni mozgóképes produkciók
                  megtekintéséért, továbbá esetlegesen érdekli őket a film-
                  készítési folyamat, szeretnék azt megismerni, bevonódni.
                </p>
                <p class="mx-6 my-2.5 font-p-paragraph text-base text-nbgreymiddark lg:text-sm">
                  Hosszabb távon regionális és kontinentális szinten a
                  televíziót és streaminget használók, akik érdekeltek európai
                  gyártású filmprodukciók támogatásában és fogyasztásában.
                </p>
                <p class="mx-6 my-2.5 font-p-paragraph text-base text-nbgreymiddark lg:text-sm">
                  Tartalomgyártóink olyan európai, fiatal, szakképzett vagy
                  amatőr filmesek lennének, akik finnanszírozást keresnek
                  alacsony költségvetésű, kreatív produkcióikhoz, illetve
                  közönséget, kapcsolati hálót kívánnak építeni.
                </p>
              </div>
            </div>
            <div
              id="competitionAdvantage"
              class="flex items-center bg-nbgreymain bg-opacity-50 rounded-full w-full h-3"
            >
              <h2 class="bg-nbgreydark pr-3 pl-3 rounded-lg w-auto max-w-fit font-h2-title text-lg text-nbwhite italic">
                versenytársak + versenyelőny
              </h2>
            </div>
            <div class="overflow-x-auto">
              <table
                id="tablazat"
                class="table-fixed border-collapse shadow-md border rounded-lg max-w-sm"
              >
                <thead>
                  <tr>
                    <th class="m-3"></th>
                    <th>
                      <svg
                        class="m-3"
                        xmlns="http://www.w3.org/2000/svg"
                        width="28"
                        height="19"
                        viewBox="0 0 28 19"
                        fill="none"
                      >
                        <path
                          d="M0.46875 9.83301H2.63046V11.2134L4.10112 9.83301H6.95387L8.92066 11.6791V18.1153H6.58177V12.2778L5.97933 11.6957H4.49094L2.80764 13.2923V18.1153H0.46875V9.83301Z"
                          fill="#2B535D"
                        />
                        <path
                          d="M2.95737 9.14457H0.46875V6.6875L2.1967 4.99424L0.46875 3.30097V0.862305H2.97615L4.69471 2.54637L6.41326 0.862305H8.92066V3.30097L7.19272 4.99424L8.92066 6.6875V9.14457H6.43204L4.69471 7.44211L2.95737 9.14457Z"
                          fill="#2B535D"
                        />
                        <path
                          d="M21.266 18.1153H18.7773V15.6582L20.5053 13.9649L18.7773 12.2717V9.83301H21.2847L23.0033 11.5171L24.7219 9.83301H27.2293V12.2717L25.5013 13.9649L27.2293 15.6582V18.1153H24.7406L23.0033 16.4128L21.266 18.1153Z"
                          fill="#2B535D"
                        />
                        <path
                          d="M9.625 16.307V6.15332H11.9018V10.9286L13.161 9.77246H16.3003L18.0769 11.515V16.374L16.3003 18.1166H11.4706L9.625 16.307ZM15.1446 16.24L15.8001 15.5865V12.3025L15.1446 11.6491H13.4542L11.9018 13.157V15.5865L12.5573 16.24H15.1446Z"
                          fill="#2B535D"
                        />
                        <path
                          d="M11.3529 4.99424L9.625 3.30097V0.862305H12.1324L13.851 2.54637L15.5695 0.862305H18.0769V3.30097L16.349 4.99424L18.0769 6.6875V9.14457H15.5883L13.851 7.44211L11.3529 4.99424Z"
                          fill="#2B535D"
                        />
                        <path
                          d="M20.512 5.00047L18.7747 6.70293L21.2539 9.1416L23.01 7.44834L24.7379 9.1416L27.2266 6.68453L25.508 5.00047L27.2266 3.31641L24.7379 0.859332L23.01 2.5526L21.2821 0.859332L18.7747 3.27499L20.512 5.00047Z"
                          fill="#2B535D"
                        />
                      </svg>
                    </th>
                    <th>
                      <svg
                        class="m-3"
                        xmlns="http://www.w3.org/2000/svg"
                        width="59"
                        height="8"
                        viewBox="0 0 59 8"
                        fill="none"
                      >
                        <path
                          d="M2.67972 2.78925L3.88368 1.03347C4.10942 0.707395 4.41041 0.544358 4.77411 0.544358C5.0751 0.544358 5.32593 0.644688 5.53913 0.85789C5.75233 1.07109 5.8652 1.32192 5.8652 1.61037C5.8652 1.82357 5.8025 2.01169 5.68963 2.18727L4.59853 3.76747L5.92791 5.46054C6.06586 5.62358 6.12857 5.82424 6.12857 6.04998C6.12857 6.35097 6.02824 6.6018 5.81504 6.815C5.60184 7.0282 5.35101 7.14107 5.05002 7.14107C4.72395 7.14107 4.47312 7.04074 4.29754 6.82754L2.66718 4.79585V5.92457C2.66718 6.25064 2.61701 6.48893 2.50414 6.67705C2.30348 7.00312 2.00249 7.16616 1.61371 7.16616C1.26255 7.16616 0.986643 7.05329 0.798523 6.815C0.622945 6.56418 0.535156 6.27573 0.535156 5.91203V1.74832C0.535156 1.40971 0.622945 1.12126 0.811065 0.895514C0.999184 0.669771 1.27509 0.544358 1.61371 0.544358C1.93978 0.544358 2.20315 0.669771 2.41635 0.895514C2.54176 1.02093 2.61701 1.15888 2.64209 1.28429C2.66718 1.37208 2.66718 1.52258 2.66718 1.74832V2.78925H2.67972ZM8.67445 1.87373V5.89949C8.67445 6.25064 8.58666 6.53909 8.39854 6.76484C8.21042 7.01566 7.93452 7.14107 7.5959 7.14107C7.28237 7.14107 7.019 7.0282 6.8058 6.78992C6.63022 6.6018 6.52989 6.30081 6.52989 5.89949V1.87373C6.52989 1.42225 6.61768 1.09617 6.8058 0.895514C7.019 0.65723 7.28237 0.544358 7.60844 0.544358C7.93452 0.544358 8.19788 0.65723 8.39854 0.882973C8.58666 1.09617 8.67445 1.42225 8.67445 1.87373ZM12.5372 0.418945C13.3273 0.418945 14.0547 0.682312 14.7194 1.20905C15.2335 1.62291 15.4969 2.06185 15.4969 2.51334C15.4969 2.88958 15.3339 3.19057 15.0203 3.40377C14.8448 3.52918 14.6441 3.57935 14.4309 3.57935C14.2553 3.57935 14.0923 3.54173 13.9293 3.45394C13.8665 3.41631 13.7035 3.25328 13.4401 2.97737C13.2019 2.714 12.8883 2.57605 12.5246 2.57605C12.1735 2.57605 11.8725 2.70146 11.6342 2.93974C11.3959 3.19057 11.2705 3.49156 11.2705 3.84272C11.2705 4.19387 11.3959 4.49486 11.6342 4.74569C11.8725 4.99651 12.1735 5.10939 12.5246 5.10939C12.8131 5.10939 13.089 5.00906 13.3398 4.80839C13.4903 4.6579 13.6533 4.5074 13.8038 4.35691C13.9669 4.21895 14.1801 4.14371 14.4309 4.14371C14.7194 4.14371 14.9702 4.24404 15.1959 4.4447C15.4091 4.64536 15.522 4.89618 15.522 5.18463C15.522 5.58595 15.2837 5.98728 14.8197 6.3886C14.1675 6.9655 13.4151 7.2414 12.5497 7.2414C12.023 7.2414 11.5213 7.12853 11.0448 6.90279C10.4553 6.61434 9.97875 6.20048 9.62759 5.64866C9.27643 5.09684 9.10086 4.49486 9.10086 3.83017C9.10086 2.85195 9.46455 2.01169 10.1919 1.32192C10.8316 0.732477 11.6091 0.431487 12.5372 0.418945ZM18.0303 2.78925L19.2342 1.03347C19.46 0.707395 19.761 0.544358 20.1246 0.544358C20.4256 0.544358 20.6765 0.644688 20.8897 0.85789C21.1029 1.07109 21.2157 1.32192 21.2157 1.61037C21.2157 1.82357 21.153 2.01169 21.0402 2.18727L19.9491 3.76747L21.2784 5.46054C21.4164 5.62358 21.4791 5.82424 21.4791 6.04998C21.4791 6.35097 21.3788 6.6018 21.1656 6.815C20.9524 7.0282 20.7015 7.14107 20.4006 7.14107C20.0745 7.14107 19.8237 7.04074 19.6481 6.82754L18.0177 4.79585V5.92457C18.0177 6.25064 17.9675 6.48893 17.8547 6.67705C17.654 7.00312 17.353 7.16616 16.9642 7.16616C16.6131 7.16616 16.3372 7.05329 16.1491 6.815C15.9735 6.6018 15.8731 6.30081 15.8731 5.94965V1.74832C15.8731 1.40971 15.9609 1.12126 16.1491 0.895514C16.3623 0.669771 16.6256 0.544358 16.9642 0.544358C17.2903 0.544358 17.5537 0.65723 17.7794 0.895514C17.9048 1.02093 17.9801 1.15888 18.0052 1.28429C18.0303 1.37208 18.0303 1.52258 18.0303 1.74832V2.78925Z"
                          fill="#2B535D"
                        />
                        <path
                          d="M22.4548 4.62696C22.6931 4.62696 22.9439 4.72729 23.2198 4.94049C23.5584 5.20386 23.7842 5.32927 23.9096 5.32927C24.0977 5.32927 24.1855 5.22894 24.1855 5.04082C24.1855 4.94049 24.1353 4.8527 24.0224 4.77745C23.9597 4.73983 23.6462 4.61442 23.0568 4.41376C22.1036 4.07514 21.6271 3.46062 21.6271 2.5451C21.6271 1.85533 21.8779 1.31606 22.3795 0.927279C22.831 0.588664 23.3703 0.413086 24.0224 0.413086C24.5868 0.413086 25.0759 0.55104 25.4898 0.814407C25.9036 1.07777 26.1168 1.42893 26.1168 1.85533C26.1168 2.10616 26.0416 2.31936 25.8786 2.49494C25.7155 2.67052 25.5149 2.74577 25.264 2.74577C25.0007 2.74577 24.7122 2.62035 24.3861 2.36953C24.1855 2.21903 24.035 2.13124 23.9347 2.13124C23.7591 2.13124 23.6713 2.21903 23.6713 2.38207C23.6713 2.5451 23.8845 2.6956 24.3234 2.82101C24.9254 3.00913 25.3769 3.23488 25.703 3.51078C26.1419 3.87448 26.3551 4.37613 26.3551 5.02828C26.3551 5.74313 26.1168 6.29495 25.6277 6.69627C25.1762 7.07251 24.5868 7.24809 23.8594 7.24809C23.132 7.24809 22.53 7.05997 22.0535 6.67119C21.6772 6.35766 21.4766 6.0065 21.4766 5.59264C21.4766 5.31673 21.5644 5.09099 21.7525 4.90287C21.9531 4.72729 22.1789 4.62696 22.4548 4.62696ZM28.1862 2.58273H27.6218C27.3083 2.58273 27.0449 2.49494 26.8442 2.3319C26.631 2.14378 26.5182 1.9055 26.5182 1.59197C26.5182 1.40385 26.5683 1.22827 26.6687 1.06523C26.769 0.889655 26.9069 0.776783 27.07 0.701536C27.233 0.626288 27.6218 0.588664 28.2363 0.588664H30.3934C30.9202 0.588664 31.2713 0.626288 31.4218 0.688994C31.5974 0.764242 31.7353 0.877114 31.8357 1.05269C31.936 1.22827 31.9987 1.40385 31.9987 1.59197C31.9987 1.89296 31.8858 2.14378 31.6475 2.35699C31.4845 2.50748 31.2086 2.59527 30.8198 2.59527H30.3307V5.83092C30.3307 6.18208 30.268 6.45799 30.1551 6.64611C29.9545 6.97218 29.6535 7.13522 29.2772 7.13522C28.8885 7.13522 28.6 6.98472 28.3868 6.69627C28.2614 6.50815 28.1862 6.23224 28.1862 5.85601V2.58273ZM33.3908 6.24478C33.2905 6.48307 33.1901 6.67119 33.0773 6.78406C32.8641 7.02234 32.6007 7.13522 32.2872 7.13522C31.9109 7.13522 31.6099 6.98472 31.4093 6.68373C31.2839 6.50815 31.2211 6.29495 31.2211 6.06921C31.2211 5.88109 31.2713 5.69297 31.3591 5.50485L33.3908 1.1781C33.5914 0.751701 33.9175 0.55104 34.3815 0.55104C34.8456 0.55104 35.1842 0.764242 35.3849 1.20319L37.4416 5.55501C37.5294 5.73059 37.567 5.90617 37.567 6.06921C37.567 6.32003 37.4792 6.54578 37.3162 6.74644C37.103 7.0098 36.8271 7.13522 36.4885 7.13522C36.2126 7.13522 35.9868 7.04743 35.7987 6.88439C35.6608 6.75898 35.5228 6.54578 35.3849 6.25733H33.3908V6.24478ZM42.2951 4.57679L42.7968 5.39198C42.9347 5.61772 43.01 5.84346 43.01 6.08175C43.01 6.38274 42.9096 6.63356 42.6964 6.83423C42.4832 7.03489 42.2324 7.13522 41.9314 7.13522C41.5426 7.13522 41.2542 6.97218 41.0535 6.64611L40.1631 5.17878V6.05667C40.1631 6.35766 40.0628 6.60848 39.8621 6.82168C39.6614 7.03489 39.4106 7.13522 39.1096 7.13522C38.7459 7.13522 38.4575 7.0098 38.2693 6.7339C38.0938 6.50815 38.0185 6.19462 38.0185 5.81838V1.81771C38.0185 0.989985 38.4575 0.588664 39.3479 0.588664H40.7149C41.1664 0.588664 41.5802 0.714077 41.9565 0.977444C42.3453 1.24081 42.6212 1.56688 42.7968 1.98075C42.9347 2.29428 42.9974 2.60781 42.9974 2.92134C42.9974 3.51078 42.7591 4.0626 42.2951 4.57679ZM44.841 2.58273H44.2766C43.9631 2.58273 43.6997 2.49494 43.4991 2.3319C43.2859 2.14378 43.173 1.9055 43.173 1.59197C43.173 1.40385 43.2232 1.22827 43.3235 1.06523C43.4238 0.889655 43.5618 0.776783 43.7248 0.701536C43.8878 0.626288 44.2766 0.588664 44.8911 0.588664H47.0482C47.575 0.588664 47.9261 0.626288 48.0766 0.688994C48.2522 0.764242 48.3902 0.877114 48.4905 1.05269C48.5908 1.22827 48.6535 1.40385 48.6535 1.59197C48.6535 1.89296 48.5407 2.14378 48.3024 2.35699C48.1393 2.50748 47.8634 2.59527 47.4747 2.59527H46.9855V5.83092C46.9855 6.18208 46.9228 6.45799 46.81 6.64611C46.6093 6.97218 46.3083 7.13522 45.9321 7.13522C45.5433 7.13522 45.2548 6.98472 45.0416 6.69627C44.9162 6.50815 44.841 6.23224 44.841 5.85601V2.58273ZM51.1869 5.07845H52.1651C52.5664 5.07845 52.8674 5.16623 53.0681 5.32927C53.2938 5.52993 53.4192 5.78076 53.4192 6.09429C53.4192 6.40782 53.3064 6.67119 53.0681 6.85931C52.8925 7.0098 52.5915 7.08505 52.1776 7.08505H50.5096C50.1209 7.08505 49.845 7.05997 49.6945 6.99726C49.406 6.88439 49.2179 6.68373 49.1301 6.42036C49.0674 6.24479 49.0423 5.96888 49.0423 5.5801V2.04345C49.0423 1.74246 49.0549 1.55434 49.0674 1.45401C49.105 1.25335 49.1803 1.07777 49.3182 0.927279C49.4687 0.764242 49.6694 0.663912 49.8951 0.613747C50.008 0.588664 50.2337 0.588664 50.5724 0.588664H51.8516C52.2027 0.588664 52.4034 0.588664 52.4661 0.601205C52.6918 0.626288 52.8799 0.688994 53.0304 0.801866C53.2938 1.00253 53.4192 1.25335 53.4192 1.56688C53.4192 1.9055 53.3064 2.16887 53.0806 2.35699C52.8799 2.52002 52.604 2.59527 52.2529 2.59527H51.1994V3.03422H52.0397C52.2905 3.03422 52.4912 3.09692 52.6542 3.23488C52.8298 3.37283 52.905 3.56095 52.905 3.81177C52.905 4.32597 52.5915 4.58933 51.9644 4.58933H51.1994V5.07845H51.1869ZM58.072 4.57679L58.5737 5.39198C58.7117 5.61772 58.7869 5.84346 58.7869 6.08175C58.7869 6.38274 58.6866 6.63356 58.4734 6.83423C58.2602 7.03489 58.0093 7.13522 57.7083 7.13522C57.3196 7.13522 57.0311 6.97218 56.8305 6.64611L55.94 5.17878V6.05667C55.94 6.35766 55.8397 6.60848 55.639 6.82168C55.4384 7.03489 55.1875 7.13522 54.8866 7.13522C54.5229 7.13522 54.2344 7.0098 54.0463 6.7339C53.8707 6.50815 53.7955 6.19462 53.7955 5.81838V1.81771C53.7955 0.989985 54.2344 0.588664 55.1248 0.588664H56.4918C56.9433 0.588664 57.3572 0.714077 57.7334 0.977444C58.1222 1.24081 58.3981 1.56688 58.5737 1.98075C58.7117 2.29428 58.7744 2.60781 58.7744 2.92134C58.7744 3.51078 58.5361 4.0626 58.072 4.57679Z"
                          fill="#2B535D"
                        />
                      </svg>
                    </th>
                    <th>
                      <svg
                        class="m-3"
                        xmlns="http://www.w3.org/2000/svg"
                        width="37"
                        height="11"
                        viewBox="0 0 37 11"
                        fill="none"
                      >
                        <path
                          d="M5.4682 9.38614C4.92852 9.48091 4.37934 9.50933 3.81125 9.585L2.07848 4.50997V9.80282C1.53881 9.85961 1.04646 9.93535 0.535156 10.0111V0.31543H1.9744L3.94379 5.81667V0.31543H5.4682V9.38614ZM8.45076 3.86609C9.03785 3.86609 9.93734 3.83768 10.477 3.83768V5.35259C9.80473 5.35259 9.01889 5.35259 8.45076 5.38101V7.63453C9.34083 7.57774 10.2309 7.50192 11.1303 7.47351V8.93156L6.93578 9.26303V0.31543H11.1303V1.83038H8.45076V3.86609ZM16.764 1.83042H15.1923V8.79917C14.681 8.79917 14.1697 8.79917 13.6774 8.81805V1.83042H12.1057V0.31543H16.7641L16.764 1.83042ZM19.2258 3.76197H21.2994V5.27688H19.2258V8.71396H17.7391V0.31543H21.9717V1.83038H19.2258V3.76197ZM24.4334 7.38834C25.2951 7.40722 26.1661 7.47362 27.0089 7.52088V9.01691C25.6549 8.93163 24.3009 8.84653 22.9185 8.81805V0.31543H24.4334V7.38834ZM28.2871 9.12107C28.77 9.14952 29.2813 9.17793 29.7736 9.23465V0.31543H28.2871V9.12107ZM36.411 0.31543L34.4889 4.92657L36.411 10.0111C35.8429 9.93535 35.2748 9.83119 34.7067 9.73649L33.6178 6.9339L32.5101 9.50933C31.9609 9.41456 31.4306 9.38614 30.8816 9.3104L32.832 4.86971L31.0709 0.31543H32.6994L33.6935 2.86244L34.7541 0.31543L36.411 0.31543Z"
                          fill="#2B535D"
                        />
                      </svg>
                    </th>
                    <th>
                      <svg
                        class="m-3"
                        xmlns="http://www.w3.org/2000/svg"
                        width="27"
                        height="11"
                        viewBox="0 0 27 11"
                        fill="none"
                      >
                        <path
                          d="M0.496094 0.31543V10.2162H3.24631V0.31543H0.496094Z"
                          fill="#2B535D"
                        />
                        <path
                          d="M8.84447 0.31543L8.22896 4.94045L7.84652 2.42486C7.73564 1.61908 7.62928 0.91594 7.52745 0.31543H4.07422V10.2162H6.4073L6.41635 3.67828L7.39846 10.2162H9.05945L9.99178 3.53416L9.99857 10.2162H12.3249V0.31543H8.84447Z"
                          fill="#2B535D"
                        />
                        <path
                          d="M13.1484 10.2162V0.31543H17.4413C18.412 0.31543 19.1989 1.09646 19.1989 2.0627V8.46893C19.1989 9.43392 18.4133 10.2162 17.4413 10.2162H13.1484ZM16.3564 2.09731C16.2473 2.03835 16.0386 2.00996 15.7351 2.00996V8.50638C16.1359 8.50638 16.3825 8.43432 16.475 8.28365C16.5675 8.13516 16.6149 7.73336 16.6149 7.07389V3.235C16.6149 2.78735 16.5983 2.50129 16.5675 2.37463C16.5367 2.24798 16.4679 2.15627 16.3564 2.09731Z"
                          fill="#2B535D"
                        />
                        <path
                          d="M24.1063 2.79439H24.2821C25.2695 2.79439 26.07 3.56765 26.07 4.52043V8.49016C26.07 9.44343 25.2698 10.2162 24.2821 10.2162H24.1063C23.5021 10.2162 22.9679 9.92669 22.6443 9.48369L22.4859 10.089H20.0195V0.31543H22.6511V3.49497C22.9911 3.07123 23.5151 2.79439 24.1063 2.79439ZM23.5429 7.62232V5.27631C23.5429 4.88867 23.518 4.63429 23.4661 4.51719C23.4143 4.40009 23.2074 4.32491 23.0622 4.32491C22.917 4.32491 22.6932 4.38601 22.6496 4.48897V8.46018C22.6994 8.57324 22.9129 8.63615 23.0622 8.63615C23.2115 8.63615 23.4288 8.57526 23.4744 8.46018C23.5201 8.3451 23.5429 8.06446 23.5429 7.62232Z"
                          fill="#2B535D"
                        />
                      </svg>
                    </th>
                    <th>
                      <svg
                        class="m-3"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="10"
                        viewBox="0 0 24 10"
                        fill="none"
                      >
                        <path
                          d="M20.4153 7.29346H17.1445L20.4153 3.65996V7.29346ZM23.0897 7.29346V0.31543L16.5789 7.54553H11.5806C11.3654 7.54553 11.1932 7.37338 11.1932 7.1582C11.1932 7.01065 11.2732 6.88769 11.39 6.82006C11.3961 6.82006 11.3961 6.81391 11.4023 6.81391C11.9064 6.55569 12.3921 6.42043 12.6688 6.34051L12.7548 6.31592C12.9208 6.26673 13.1299 6.2237 13.3451 6.17451C13.4188 6.15607 13.4988 6.13762 13.5787 6.12533C14.9005 5.82407 16.6896 5.30764 16.6896 3.19886C16.6896 2.73161 16.5728 2.25821 16.3023 1.834C15.8719 1.15771 15.0604 0.610536 13.7324 0.450687C13.4742 0.419946 13.1914 0.401502 12.8901 0.401502C10.8305 0.401502 9.44105 1.48356 9.39187 3.10664C9.39187 3.13738 9.39187 3.16197 9.39187 3.19271C9.39187 4.09033 10.1173 4.8158 11.015 4.8158C11.9126 4.8158 12.638 4.08418 12.638 3.19271C12.638 2.2951 11.9126 1.56963 11.015 1.56963C10.9658 1.56963 10.9166 1.56963 10.8674 1.57578H10.8612C10.5293 1.60652 10.2219 1.74178 9.98208 1.93851C10.1665 1.64955 10.4186 1.40363 10.726 1.20075C10.7321 1.20075 10.7321 1.1946 10.7383 1.1946C11.2916 0.838013 12.0294 0.641276 12.8963 0.641276C12.9885 0.641276 13.0807 0.641276 13.1668 0.647424C13.1852 0.647424 13.2037 0.647424 13.2221 0.647424C13.4127 0.672016 13.5602 0.831865 13.5602 1.0286V5.52897C13.5602 5.738 13.4127 5.9163 13.2221 5.96548C13.2098 5.96548 13.2037 5.97163 13.1914 5.97163C13.0069 6.00852 12.8409 6.05155 12.6934 6.09459L12.6134 6.11918C12.2138 6.22985 11.3838 6.46347 10.6522 7.02294C10.394 7.21968 10.1727 7.43486 9.98208 7.67463C9.50253 8.28329 9.26276 9.0272 9.26276 9.89408H14.4824L16.5912 7.55167H20.4215V9.89408H23.0959V7.55167H23.766V7.2996H23.0897M1.77444 7.58856L3.42212 4.06573L5.06365 7.58856H1.77444ZM3.9693 2.2951C3.6373 2.98983 2.94872 3.0636 2.94872 3.0636L3.28071 3.77063V3.77678L0.421875 9.88793H0.698537L1.65763 7.84063H5.18046L6.13341 9.88793H9.08447L4.76239 0.604388L3.9693 2.2951Z"
                          fill="#2B535D"
                        />
                      </svg>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="bg-nbwhite">
                    <td class="p-3 max-w- font-bold font-h2-title text-center text-nbgreydark text-sm felx-wrap">
                      készítő-készítő kapcsolatteremtés
                    </td>
                    <td>
                      <svg
                        id="pipa"
                        xmlns="http://www.w3.org/2000/svg"
                        width="17"
                        height="15"
                        viewBox="0 0 17 15"
                        fill="none"
                      >
                        <path
                          d="M6.42147 14.3315L0.124921 8.03493L4.19916 3.96069L6.42147 6.183L12.3476 0.256836L16.4219 4.33107L6.42147 14.3315Z"
                          fill="#90B0B9"
                        />
                      </svg>
                    </td>
                    <td>
                      <svg
                        id="X"
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                      >
                        <path
                          d="M13.6734 9.40823L16.7403 6.34135L12.3638 1.94824L9.26372 4.99855L6.21342 1.94824L1.82031 6.3745L4.85404 9.40823L1.82031 12.442L6.21342 16.8682L9.26372 13.8179L12.314 16.8682L16.7403 12.5166L13.6734 9.40823Z"
                          fill="#F4451E"
                        />
                      </svg>
                    </td>
                    <td>
                      <svg
                        id="X"
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                      >
                        <path
                          d="M13.6734 9.40823L16.7403 6.34135L12.3638 1.94824L9.26372 4.99855L6.21342 1.94824L1.82031 6.3745L4.85404 9.40823L1.82031 12.442L6.21342 16.8682L9.26372 13.8179L12.314 16.8682L16.7403 12.5166L13.6734 9.40823Z"
                          fill="#F4451E"
                        />
                      </svg>
                    </td>
                    <td>
                      <svg
                        id="pipa"
                        xmlns="http://www.w3.org/2000/svg"
                        width="17"
                        height="15"
                        viewBox="0 0 17 15"
                        fill="none"
                      >
                        <path
                          d="M6.42147 14.3315L0.124921 8.03493L4.19916 3.96069L6.42147 6.183L12.3476 0.256836L16.4219 4.33107L6.42147 14.3315Z"
                          fill="#90B0B9"
                        />
                      </svg>
                    </td>
                    <td>
                      <svg
                        id="X"
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                      >
                        <path
                          d="M13.6734 9.40823L16.7403 6.34135L12.3638 1.94824L9.26372 4.99855L6.21342 1.94824L1.82031 6.3745L4.85404 9.40823L1.82031 12.442L6.21342 16.8682L9.26372 13.8179L12.314 16.8682L16.7403 12.5166L13.6734 9.40823Z"
                          fill="#F4451E"
                        />
                      </svg>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span class="flex justify-center m-3 font-bold font-h2-title text-nbgreydark text-sm felx-wrap">
                        szakmai támogatás
                      </span>
                    </td>
                    <td>
                      <svg
                        id="pipa"
                        xmlns="http://www.w3.org/2000/svg"
                        width="17"
                        height="15"
                        viewBox="0 0 17 15"
                        fill="none"
                      >
                        <path
                          d="M6.42147 14.3315L0.124921 8.03493L4.19916 3.96069L6.42147 6.183L12.3476 0.256836L16.4219 4.33107L6.42147 14.3315Z"
                          fill="#90B0B9"
                        />
                      </svg>
                    </td>
                    <td>
                      <svg
                        id="X"
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                      >
                        <path
                          d="M13.6734 9.40823L16.7403 6.34135L12.3638 1.94824L9.26372 4.99855L6.21342 1.94824L1.82031 6.3745L4.85404 9.40823L1.82031 12.442L6.21342 16.8682L9.26372 13.8179L12.314 16.8682L16.7403 12.5166L13.6734 9.40823Z"
                          fill="#F4451E"
                        />
                      </svg>
                    </td>
                    <td>
                      <svg
                        id="pipa"
                        xmlns="http://www.w3.org/2000/svg"
                        width="17"
                        height="15"
                        viewBox="0 0 17 15"
                        fill="none"
                      >
                        <path
                          d="M6.42147 14.3315L0.124921 8.03493L4.19916 3.96069L6.42147 6.183L12.3476 0.256836L16.4219 4.33107L6.42147 14.3315Z"
                          fill="#90B0B9"
                        />
                      </svg>
                    </td>
                    <td>
                      <svg
                        id="X"
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                      >
                        <path
                          d="M13.6734 9.40823L16.7403 6.34135L12.3638 1.94824L9.26372 4.99855L6.21342 1.94824L1.82031 6.3745L4.85404 9.40823L1.82031 12.442L6.21342 16.8682L9.26372 13.8179L12.314 16.8682L16.7403 12.5166L13.6734 9.40823Z"
                          fill="#F4451E"
                        />
                      </svg>
                    </td>
                    <td>
                      <svg
                        id="pipa"
                        xmlns="http://www.w3.org/2000/svg"
                        width="17"
                        height="15"
                        viewBox="0 0 17 15"
                        fill="none"
                      >
                        <path
                          d="M6.42147 14.3315L0.124921 8.03493L4.19916 3.96069L6.42147 6.183L12.3476 0.256836L16.4219 4.33107L6.42147 14.3315Z"
                          fill="#90B0B9"
                        />
                      </svg>
                    </td>
                  </tr>
                  <tr class="bg-nbwhite">
                    <td>
                      <span class="flex justify-center m-3 font-bold font-h2-title text-nbgreydark text-sm felx-wrap">
                        készítő-készítő kapcsolatteremtés
                      </span>
                    </td>
                    <td>
                      <svg
                        id="pipa"
                        xmlns="http://www.w3.org/2000/svg"
                        width="17"
                        height="15"
                        viewBox="0 0 17 15"
                        fill="none"
                      >
                        <path
                          d="M6.42147 14.3315L0.124921 8.03493L4.19916 3.96069L6.42147 6.183L12.3476 0.256836L16.4219 4.33107L6.42147 14.3315Z"
                          fill="#90B0B9"
                        />
                      </svg>
                    </td>
                    <td>
                      <svg
                        id="pipa"
                        xmlns="http://www.w3.org/2000/svg"
                        width="17"
                        height="15"
                        viewBox="0 0 17 15"
                        fill="none"
                      >
                        <path
                          d="M6.42147 14.3315L0.124921 8.03493L4.19916 3.96069L6.42147 6.183L12.3476 0.256836L16.4219 4.33107L6.42147 14.3315Z"
                          fill="#90B0B9"
                        />
                      </svg>
                    </td>
                    <td>
                      <svg
                        id="X"
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                      >
                        <path
                          d="M13.6734 9.40823L16.7403 6.34135L12.3638 1.94824L9.26372 4.99855L6.21342 1.94824L1.82031 6.3745L4.85404 9.40823L1.82031 12.442L6.21342 16.8682L9.26372 13.8179L12.314 16.8682L16.7403 12.5166L13.6734 9.40823Z"
                          fill="#F4451E"
                        />
                      </svg>
                    </td>
                    <td>
                      <svg
                        id="X"
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                      >
                        <path
                          d="M13.6734 9.40823L16.7403 6.34135L12.3638 1.94824L9.26372 4.99855L6.21342 1.94824L1.82031 6.3745L4.85404 9.40823L1.82031 12.442L6.21342 16.8682L9.26372 13.8179L12.314 16.8682L16.7403 12.5166L13.6734 9.40823Z"
                          fill="#F4451E"
                        />
                      </svg>
                    </td>
                    <td>
                      <svg
                        id="X"
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                      >
                        <path
                          d="M13.6734 9.40823L16.7403 6.34135L12.3638 1.94824L9.26372 4.99855L6.21342 1.94824L1.82031 6.3745L4.85404 9.40823L1.82031 12.442L6.21342 16.8682L9.26372 13.8179L12.314 16.8682L16.7403 12.5166L13.6734 9.40823Z"
                          fill="#F4451E"
                        />
                      </svg>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span class="flex justify-center m-3 font-bold font-h2-title text-nbgreydark text-sm felx-wrap">
                        szakmai támogatás
                      </span>
                    </td>
                    <td>
                      <svg
                        id="pipa"
                        xmlns="http://www.w3.org/2000/svg"
                        width="17"
                        height="15"
                        viewBox="0 0 17 15"
                        fill="none"
                      >
                        <path
                          d="M6.42147 14.3315L0.124921 8.03493L4.19916 3.96069L6.42147 6.183L12.3476 0.256836L16.4219 4.33107L6.42147 14.3315Z"
                          fill="#90B0B9"
                        />
                      </svg>
                    </td>
                    <td>
                      <svg
                        id="X"
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                      >
                        <path
                          d="M13.6734 9.40823L16.7403 6.34135L12.3638 1.94824L9.26372 4.99855L6.21342 1.94824L1.82031 6.3745L4.85404 9.40823L1.82031 12.442L6.21342 16.8682L9.26372 13.8179L12.314 16.8682L16.7403 12.5166L13.6734 9.40823Z"
                          fill="#F4451E"
                        />
                      </svg>
                    </td>
                    <td>
                      <svg
                        id="X"
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                      >
                        <path
                          d="M13.6734 9.40823L16.7403 6.34135L12.3638 1.94824L9.26372 4.99855L6.21342 1.94824L1.82031 6.3745L4.85404 9.40823L1.82031 12.442L6.21342 16.8682L9.26372 13.8179L12.314 16.8682L16.7403 12.5166L13.6734 9.40823Z"
                          fill="#F4451E"
                        />
                      </svg>
                    </td>
                    <td>
                      <svg
                        id="X"
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                      >
                        <path
                          d="M13.6734 9.40823L16.7403 6.34135L12.3638 1.94824L9.26372 4.99855L6.21342 1.94824L1.82031 6.3745L4.85404 9.40823L1.82031 12.442L6.21342 16.8682L9.26372 13.8179L12.314 16.8682L16.7403 12.5166L13.6734 9.40823Z"
                          fill="#F4451E"
                        />
                      </svg>
                    </td>
                    <td>
                      <svg
                        id="pipa"
                        xmlns="http://www.w3.org/2000/svg"
                        width="17"
                        height="15"
                        viewBox="0 0 17 15"
                        fill="none"
                      >
                        <path
                          d="M6.42147 14.3315L0.124921 8.03493L4.19916 3.96069L6.42147 6.183L12.3476 0.256836L16.4219 4.33107L6.42147 14.3315Z"
                          fill="#90B0B9"
                        />
                      </svg>
                    </td>
                  </tr>
                  <tr class="bg-nbwhite">
                    <td>
                      <span class="flex justify-center m-3 font-bold font-h2-title text-nbgreydark text-sm felx-wrap">
                        szubkulturális termelés és prosumerek ösztönzése
                      </span>
                    </td>
                    <td>
                      <svg
                        id="pipa"
                        xmlns="http://www.w3.org/2000/svg"
                        width="17"
                        height="15"
                        viewBox="0 0 17 15"
                        fill="none"
                      >
                        <path
                          d="M6.42147 14.3315L0.124921 8.03493L4.19916 3.96069L6.42147 6.183L12.3476 0.256836L16.4219 4.33107L6.42147 14.3315Z"
                          fill="#90B0B9"
                        />
                      </svg>
                    </td>
                    <td>
                      <svg
                        id="X"
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                      >
                        <path
                          d="M13.6734 9.40823L16.7403 6.34135L12.3638 1.94824L9.26372 4.99855L6.21342 1.94824L1.82031 6.3745L4.85404 9.40823L1.82031 12.442L6.21342 16.8682L9.26372 13.8179L12.314 16.8682L16.7403 12.5166L13.6734 9.40823Z"
                          fill="#F4451E"
                        />
                      </svg>
                    </td>
                    <td>
                      <svg
                        id="X"
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                      >
                        <path
                          d="M13.6734 9.40823L16.7403 6.34135L12.3638 1.94824L9.26372 4.99855L6.21342 1.94824L1.82031 6.3745L4.85404 9.40823L1.82031 12.442L6.21342 16.8682L9.26372 13.8179L12.314 16.8682L16.7403 12.5166L13.6734 9.40823Z"
                          fill="#F4451E"
                        />
                      </svg>
                    </td>
                    <td>
                      <svg
                        id="X"
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                      >
                        <path
                          d="M13.6734 9.40823L16.7403 6.34135L12.3638 1.94824L9.26372 4.99855L6.21342 1.94824L1.82031 6.3745L4.85404 9.40823L1.82031 12.442L6.21342 16.8682L9.26372 13.8179L12.314 16.8682L16.7403 12.5166L13.6734 9.40823Z"
                          fill="#F4451E"
                        />
                      </svg>
                    </td>
                    <td>
                      <svg
                        id="X"
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                      >
                        <path
                          d="M13.6734 9.40823L16.7403 6.34135L12.3638 1.94824L9.26372 4.99855L6.21342 1.94824L1.82031 6.3745L4.85404 9.40823L1.82031 12.442L6.21342 16.8682L9.26372 13.8179L12.314 16.8682L16.7403 12.5166L13.6734 9.40823Z"
                          fill="#F4451E"
                        />
                      </svg>
                    </td>
                  </tr>
                </tbody>
                <colgroup>
                  <col />
                  <col class="bg-nbgreenlight bg-opacity-40" />
                  <col />
                  <col class="bg-nbgreymain bg-opacity-15" />
                  <col />
                  <col class="bg-nbgreymain bg-opacity-15" />
                </colgroup>
              </table>
            </div>
            <div
              id="bisunessModell"
              class="flex items-center bg-nbgreymain bg-opacity-50 rounded-full w-full h-3"
            >
              <h2 class="bg-nbgreydark pr-3 pl-3 rounded-lg w-auto max-w-fit font-h2-title text-lg text-nbwhite italic">
                üzleti modell
              </h2>
            </div>
            <div class="flex lg:flex-row flex-col gap-4">
              <div class="flex justify-center bg-nbgreenlight px-6 py-2.5 rounded-lg">
                <svg
                  width="153"
                  height="129"
                  viewBox="0 0 153 129"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M56 14.0889H59.3941V16.2562L61.7032 14.0889H66.1824L69.2705 16.9874V27.093H65.5982V17.9274L64.6522 17.0135H62.3153L59.6723 19.5203V27.093H56V14.0889Z"
                    fill="#2B535D"
                  />
                  <path
                    d="M59.9074 13.01H56V9.1521L58.7131 6.49347L56 3.83485V0.00585938H59.9369L62.6352 2.65003L65.3336 0.00585938H69.2705V3.83485L66.5574 6.49347L69.2705 9.1521V13.01H65.3631L62.6352 10.3369L59.9074 13.01Z"
                    fill="#2B535D"
                  />
                  <path
                    d="M88.6535 27.093H84.7461V23.2351L87.4592 20.5765L84.7461 17.9179V14.0889H88.683L91.3813 16.733L94.0797 14.0889H98.0166V17.9179L95.3035 20.5765L98.0166 23.2351V27.093H94.1092L91.3813 24.4199L88.6535 27.093Z"
                    fill="#2B535D"
                  />
                  <path
                    d="M70.3789 24.255V8.3125H73.9538V15.8102L75.9308 13.995H80.8599L83.6494 16.731V24.3602L80.8599 27.0962H73.2767L70.3789 24.255ZM79.0453 24.1498L80.0745 23.1238V17.9674L79.0453 16.9414H76.3912L73.9538 19.3091V23.1238L74.983 24.1498H79.0453Z"
                    fill="#2B535D"
                  />
                  <path
                    d="M73.092 6.49347L70.3789 3.83485V0.00585938H74.3158L77.0141 2.65003L79.7125 0.00585938H83.6494V3.83485L80.9363 6.49347L83.6494 9.1521V13.01H79.742L77.0141 10.3369L73.092 6.49347Z"
                    fill="#2B535D"
                  />
                  <path
                    d="M87.4691 6.50184L84.7412 9.17491L88.6339 13.0039L91.3912 10.3453L94.1043 13.0039L98.0117 9.14602L95.3134 6.50184L98.0117 3.85767L94.1043 -0.000221587L91.3912 2.6584L88.6781 -0.000222052L84.7412 3.79265L87.4691 6.50184Z"
                    fill="#2B535D"
                  />
                  <g clip-path="url(#clip0_0_1)">
                    <rect
                      x="2"
                      y="73.0117"
                      width="21"
                      height="21"
                      rx="10.5"
                      fill="#2B535D"
                    />
                    <path
                      d="M12.4987 75.9521C10.0155 75.9521 7.98375 78.4805 7.98375 81.5959C7.98375 84.7112 10.0155 87.2396 12.4987 87.2396C14.982 87.2396 17.0138 84.7112 17.0138 81.5959C17.0138 78.4805 14.982 75.9521 12.4987 75.9521ZM7.78057 87.2396C5.38762 87.3525 3.46875 89.3165 3.46875 91.7546V94.0121H21.5287V91.7546C21.5287 89.3165 19.6325 87.3525 17.2169 87.2396C15.9979 88.6167 14.3273 89.4971 12.4987 89.4971C10.6702 89.4971 8.99962 88.6167 7.78057 87.2396Z"
                      fill="#90B0B9"
                    />
                  </g>
                  <rect
                    x="1.25"
                    y="72.2617"
                    width="22.5"
                    height="22.5"
                    rx="11.25"
                    stroke="#9ED8D2"
                    stroke-width="1.5"
                  />
                  <g clip-path="url(#clip1_0_1)">
                    <rect
                      x="13"
                      y="62.0117"
                      width="21"
                      height="21"
                      rx="10.5"
                      fill="#2B535D"
                    />
                    <path
                      d="M23.4987 64.9521C21.0155 64.9521 18.9837 67.4805 18.9837 70.5959C18.9837 73.7112 21.0155 76.2396 23.4987 76.2396C25.982 76.2396 28.0138 73.7112 28.0138 70.5959C28.0138 67.4805 25.982 64.9521 23.4987 64.9521ZM18.7806 76.2396C16.3876 76.3525 14.4688 78.3165 14.4688 80.7546V83.0121H32.5287V80.7546C32.5287 78.3165 30.6325 76.3525 28.2169 76.2396C26.9979 77.6167 25.3273 78.4971 23.4987 78.4971C21.6702 78.4971 19.9996 77.6167 18.7806 76.2396Z"
                      fill="#90B0B9"
                    />
                  </g>
                  <rect
                    x="12.25"
                    y="61.2617"
                    width="22.5"
                    height="22.5"
                    rx="11.25"
                    stroke="#9ED8D2"
                    stroke-width="1.5"
                  />
                  <g clip-path="url(#clip2_0_1)">
                    <rect
                      x="24"
                      y="73.0117"
                      width="21"
                      height="21"
                      rx="10.5"
                      fill="#2B535D"
                    />
                    <path
                      d="M34.4987 75.9521C32.0155 75.9521 29.9837 78.4805 29.9837 81.5959C29.9837 84.7112 32.0155 87.2396 34.4987 87.2396C36.982 87.2396 39.0138 84.7112 39.0138 81.5959C39.0138 78.4805 36.982 75.9521 34.4987 75.9521ZM29.7806 87.2396C27.3876 87.3525 25.4688 89.3165 25.4688 91.7546V94.0121H43.5287V91.7546C43.5287 89.3165 41.6325 87.3525 39.2169 87.2396C37.9979 88.6167 36.3273 89.4971 34.4987 89.4971C32.6702 89.4971 30.9996 88.6167 29.7806 87.2396Z"
                      fill="#90B0B9"
                    />
                  </g>
                  <rect
                    x="23.25"
                    y="72.2617"
                    width="22.5"
                    height="22.5"
                    rx="11.25"
                    stroke="#9ED8D2"
                    stroke-width="1.5"
                  />
                  <g clip-path="url(#clip3_0_1)">
                    <rect
                      x="35"
                      y="62.0117"
                      width="21"
                      height="21"
                      rx="10.5"
                      fill="#2B535D"
                    />
                    <path
                      d="M45.4987 64.9521C43.0155 64.9521 40.9837 67.4805 40.9837 70.5959C40.9837 73.7112 43.0155 76.2396 45.4987 76.2396C47.982 76.2396 50.0138 73.7112 50.0138 70.5959C50.0138 67.4805 47.982 64.9521 45.4987 64.9521ZM40.7806 76.2396C38.3876 76.3525 36.4688 78.3165 36.4688 80.7546V83.0121H54.5287V80.7546C54.5287 78.3165 52.6325 76.3525 50.2169 76.2396C48.9979 77.6167 47.3273 78.4971 45.4987 78.4971C43.6702 78.4971 41.9996 77.6167 40.7806 76.2396Z"
                      fill="#90B0B9"
                    />
                  </g>
                  <rect
                    x="34.25"
                    y="61.2617"
                    width="22.5"
                    height="22.5"
                    rx="11.25"
                    stroke="#9ED8D2"
                    stroke-width="1.5"
                  />
                  <path
                    d="M56.4987 75.9521C54.0155 75.9521 51.9837 78.4805 51.9837 81.5959C51.9837 84.7112 54.0155 87.2396 56.4987 87.2396C58.982 87.2396 61.0137 84.7112 61.0137 81.5959C61.0137 78.4805 58.982 75.9521 56.4987 75.9521ZM51.7806 87.2396C49.3876 87.3525 47.4688 89.3165 47.4688 91.7546V94.0121H65.5287V91.7546C65.5287 89.3165 63.6324 87.3525 61.2169 87.2396C59.9979 88.6167 58.3273 89.4971 56.4987 89.4971C54.6702 89.4971 52.9996 88.6167 51.7806 87.2396Z"
                    fill="#90B0B9"
                  />
                  <g clip-path="url(#clip4_0_1)">
                    <rect
                      x="83"
                      y="61.9023"
                      width="21"
                      height="21"
                      rx="10.5"
                      fill="#2B535D"
                    />
                    <path
                      d="M93.4987 64.8428C91.0155 64.8428 88.9837 67.3712 88.9837 70.4865C88.9837 73.6019 91.0155 76.1303 93.4987 76.1303C95.982 76.1303 98.0138 73.6019 98.0138 70.4865C98.0138 67.3712 95.982 64.8428 93.4987 64.8428ZM88.7806 76.1303C86.3876 76.2431 84.4688 78.2072 84.4688 80.6453V82.9028H102.529V80.6453C102.529 78.2072 100.632 76.2431 98.2169 76.1303C96.9979 77.5073 95.3273 78.3878 93.4987 78.3878C91.6702 78.3878 89.9996 77.5073 88.7806 76.1303Z"
                      fill="#90B0B9"
                    />
                  </g>
                  <rect
                    x="82.25"
                    y="61.1523"
                    width="22.5"
                    height="22.5"
                    rx="11.25"
                    stroke="#9ED8D2"
                    stroke-width="1.5"
                  />
                  <rect
                    x="100"
                    y="81.8301"
                    width="11"
                    height="7"
                    rx="1"
                    fill="#90B0B9"
                  />
                  <g clip-path="url(#clip5_0_1)">
                    <rect
                      x="107"
                      y="53.9023"
                      width="21"
                      height="21"
                      rx="10.5"
                      fill="#2B535D"
                    />
                    <path
                      d="M117.499 56.8428C115.015 56.8428 112.984 59.3712 112.984 62.4865C112.984 65.6019 115.015 68.1303 117.499 68.1303C119.982 68.1303 122.014 65.6019 122.014 62.4865C122.014 59.3712 119.982 56.8428 117.499 56.8428ZM112.781 68.1303C110.388 68.2431 108.469 70.2072 108.469 72.6453V74.9028H126.529V72.6453C126.529 70.2072 124.632 68.2431 122.217 68.1303C120.998 69.5073 119.327 70.3878 117.499 70.3878C115.67 70.3878 114 69.5073 112.781 68.1303Z"
                      fill="#90B0B9"
                    />
                  </g>
                  <rect
                    x="106.25"
                    y="53.1523"
                    width="22.5"
                    height="22.5"
                    rx="11.25"
                    stroke="#9ED8D2"
                    stroke-width="1.5"
                  />
                  <rect
                    x="123"
                    y="73.9395"
                    width="11"
                    height="7"
                    rx="1"
                    fill="#90B0B9"
                  />
                  <path
                    d="M76.5875 48.0117C76.5875 47.6873 76.3244 47.4243 76 47.4243C75.6756 47.4243 75.4125 47.6873 75.4125 48.0117L76.5875 48.0117ZM75.4125 48.0117L75.4125 49.1617L76.5875 49.1617L76.5875 48.0117L75.4125 48.0117ZM75.4125 51.4617L75.4125 53.7617L76.5875 53.7617L76.5875 51.4617L75.4125 51.4617ZM75.4125 56.0617L75.4125 58.3617L76.5875 58.3617L76.5875 56.0617L75.4125 56.0617ZM75.4125 60.6617L75.4125 62.9617L76.5875 62.9617L76.5875 60.6617L75.4125 60.6617ZM75.4125 65.2617L75.4125 67.5617L76.5875 67.5617L76.5875 65.2617L75.4125 65.2617ZM75.4125 69.8617L75.4126 72.1617L76.5875 72.1617L76.5875 69.8617L75.4125 69.8617ZM75.4126 74.4617L75.4126 76.7617L76.5875 76.7617L76.5875 74.4617L75.4126 74.4617ZM75.4126 79.0617L75.4126 81.3617L76.5875 81.3617L76.5875 79.0617L75.4126 79.0617ZM75.4126 83.6617L75.4126 85.9617L76.5875 85.9617L76.5875 83.6617L75.4126 83.6617ZM75.4126 88.2617L75.4126 90.5617L76.5875 90.5617L76.5875 88.2617L75.4126 88.2617ZM75.4126 92.8617L75.4126 94.0117L76.5875 94.0117L76.5875 92.8617L75.4126 92.8617Z"
                    fill="#517A86"
                  />
                  <path
                    d="M27 98.402H6C6 98.402 18 128.683 81.0745 128.683C141 128.683 187.5 63.0002 117.5 22.5L120 19L108 21L114 30.5L115 26C173.021 61.0005 145 117.5 75.5 117.5C75.5 117.5 90.0957 113.922 98.8404 105.064L101.5 108L100.67 97.4216L90.0957 101.001L94.3191 102.128C94.3191 102.128 62.5 124 27 98.402Z"
                    fill="#00B38C"
                  />
                  <path
                    d="M16.5 59L3 72C3 39.5 23.5 28.5 37 23L33.4981 19.9023L45.9981 20.9023L40 31.5L39 27C33.5 29 20 38 18.5 44.5C31 35 39.7901 39.5 43.5 49L47.5 47.5L43 59L34 50.5H38.7406C35 37 16.5 50.5 16.5 59Z"
                    fill="#00B38C"
                  />
                  <defs>
                    <clipPath id="clip0_0_1">
                      <rect
                        x="2"
                        y="73.0117"
                        width="21"
                        height="21"
                        rx="10.5"
                        fill="white"
                      />
                    </clipPath>
                    <clipPath id="clip1_0_1">
                      <rect
                        x="13"
                        y="62.0117"
                        width="21"
                        height="21"
                        rx="10.5"
                        fill="white"
                      />
                    </clipPath>
                    <clipPath id="clip2_0_1">
                      <rect
                        x="24"
                        y="73.0117"
                        width="21"
                        height="21"
                        rx="10.5"
                        fill="white"
                      />
                    </clipPath>
                    <clipPath id="clip3_0_1">
                      <rect
                        x="35"
                        y="62.0117"
                        width="21"
                        height="21"
                        rx="10.5"
                        fill="white"
                      />
                    </clipPath>
                    <clipPath id="clip4_0_1">
                      <rect
                        x="83"
                        y="61.9023"
                        width="21"
                        height="21"
                        rx="10.5"
                        fill="white"
                      />
                    </clipPath>
                    <clipPath id="clip5_0_1">
                      <rect
                        x="107"
                        y="53.9023"
                        width="21"
                        height="21"
                        rx="10.5"
                        fill="white"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <p class="flex border-nbgreymain pl-4 border-l-2 border-dashed font-p-paragraph text-base text-nbgreydark lg:text-sm">
                A Near-Balkan Films egy, a filmkészítők és nézők között
                kapcsolatot teremtő platform, amelynek két, egy visszatérő és
                egy alkalmi tételekből álló pénzáram biztosítja bevételét. A
                nézők (havi vagy éves alapon) előfizetnek a platformra, és ebből
                10%-ot kap meg a Near-Balkan. Ezen kívül a nézőknek lehetősége
                van a platformon belül alkalmi vásárlásra, amelyek összegéből
                szintén 10% jut a Near-Balkannak.
              </p>
            </div>
            <div
              id="prototypeContact"
              class="flex items-center bg-nbgreymain bg-opacity-50 rounded-full w-full h-3"
            >
              <h2 class="bg-nbgreydark pr-3 pl-3 rounded-lg w-auto max-w-fit font-h2-title text-lg text-nbwhite italic">
                prototípus + kapcsolat
              </h2>
            </div>
            <div class="flex lg:flex-row flex-col items-center gap-3">
              <div class="pr-6">
                <img
                  class="max-w-[91px] max-h[91px] mix-blend-multiply"
                  src="https://firebasestorage.googleapis.com/v0/b/near-balkan-films.appspot.com/o/images%2FQR_code.png?alt=media&token=68830bc9-022b-4b67-9a28-f8748c7fc403"
                  alt="A Near-Balkan QR kód-ja"
                />
              </div>
              <div class="border-nbgreymain px-6 border-l-2 border-dashed">
                <img
                  class="rounded-full max-w-[106px] max-h-[106px]"
                  src="https://firebasestorage.googleapis.com/v0/b/near-balkan-films.appspot.com/o/images%2FMatyi.jpg?alt=media&token=e71f3bb3-5a31-4e52-be81-f36e472f118a"
                  alt="Matyas"
                />
              </div>
              <div class="flex flex-col items-center">
                <h2 class="pb-2 font-bold font-bold font-h2-title text-nbgreydark text-nowrap text-xl underline underline-offset-2 decoration-nbgreenmain">
                  Bizzer I. Mátyás
                </h2>
                <p class="font-p-paragraph text-base text-nbgreydark lg:text-sm">
                  matyas.bizzer@near-balkan.com
                </p>
                <p class="font-p-paragraph text-base text-nbgreydark lg:text-sm">
                  +36 70 533 7066
                </p>
              </div>
            </div>
          </div>
          <div
            id="balOszlop"
            class="flex flex-col gap-9 max-w-sm lg:max-w-screen-xl"
          >
            <div class="flex items-center bg-nbgreymain bg-opacity-50 rounded-full w-full h-3">
              <h2 class="bg-nbgreydark pr-3 pl-3 rounded-lg w-auto max-w-fit font-h2-title text-lg text-nbwhite italic">
                megoldás
              </h2>
            </div>
            <div class="flex flex-col gap-3">
              <div class="flex flex-col items-center gap-3">
                <h2 class="font-bold font-h2-title text-nbgreenmain text-xl">
                  crowdfunding + streaming platform
                </h2>
                <div class="flex flex-row lg:flex-col gap-5 lg:gap-1 order-3 lg:order-none m-2 lg:m-0">
                  <div class="flex lg:flex-row flex-col items-center gap-2">
                    <h2 class="flex lg:flex-row flex-col items-center lg:gap-1 font-bold font-h2-title text-md text-nbgreydark text-sm">
                      <div class="flex flex-row justify-center bg-nbpurplemain px-1 -skew-y-12 min-w-fit text-sm box rotate-12">
                        <h2 class="flex lg:flex-row flex-col lg:gap-1 font-bold font-h2-title text-md text-nbwhite">
                          filmkészítóknek
                        </h2>
                      </div>
                      <a class="m-1 lg:m-0 lg:ml-2 underline underline-offset-2 decoration-2 decoration-nbgreenmain">
                        nyílvánosság
                      </a>
                      <span class="lg:block hidden text-nbgreydark">+</span>
                      <a class="m-1 lg:m-0 underline underline-offset-2 decoration-2 decoration-nbgreenmain">
                        networking
                      </a>
                      <span class="lg:block hidden text-nbgreydark">+</span>
                      <a class="lg:m-0 mt-1 underline underline-offset-2 decoration-2 decoration-nbgreenmain">
                        finanszírozás
                      </a>
                    </h2>
                  </div>
                  <div>
                    <h2 class="flex lg:flex-row flex-col items-center lg:gap-1 font-bold font-h2-title text-md text-nbgreydark text-sm">
                      <div class="flex flex-row justify-center bg-nborangemain px-1 -skew-y-12 min-w-fit text-sm box rotate-12">
                        <h2 class="font-bold font-h2-title text-md text-nbwhite">
                          fogyasztóknak
                        </h2>
                      </div>
                      <a class="m-1 lg:m-0 lg:ml-2 underline underline-offset-2 decoration-2 decoration-nbgreenmain">
                        beleszólás
                      </a>
                      <span class="lg:block hidden text-nbgreydark">+</span>
                      <a class="m-1 lg:m-0 underline underline-offset-2 decoration-2 decoration-nbgreenmain">
                        exkluzivitás
                      </a>
                      <span class="lg:block hidden text-nbgreydark">+</span>
                      <a class="lg:m-0 mt-1 underline underline-offset-2 decoration-2 decoration-nbgreenmain">
                        meccénásság
                      </a>
                    </h2>
                  </div>
                </div>
                <div class="justify-center items-center gap-4 order-2 lg:order-none grid grid-cols-3 grid-rows-2 grid-flow-col-dense max-w-md sm:max-w-lg lg:max-w-4xl">
                  <img
                    class="lg:block hidden col-span-1 row-span-2 shadow-md rounded-lg"
                    src="https://firebasestorage.googleapis.com/v0/b/near-balkan-films.appspot.com/o/images%2FAdBloc%2F1.jpg?alt=media&amp;token=0251c6a8-dd6c-41bf-aa38-6b6b4583842f"
                    alt=""
                  />
                  <img
                    class="col-span-3 lg:col-span-1 row-span-2 lg:row-span-1 shadow-md rounded-lg"
                    src="https://firebasestorage.googleapis.com/v0/b/near-balkan-films.appspot.com/o/images%2FAdBloc%2F2.jpg?alt=media&amp;token=da7397f8-74bd-4093-b1c3-38a07d258559"
                    alt=""
                  />
                  <img
                    class="lg:block hidden col-span-1 row-span-1 shadow-md rounded-lg"
                    src="https://firebasestorage.googleapis.com/v0/b/near-balkan-films.appspot.com/o/images%2FAdBloc%2F3.jpg?alt=media&amp;token=85e1d585-6365-471f-b8aa-2acd74a10f44"
                    alt=""
                  />
                  <img
                    class="lg:block hidden col-span-1 row-span-2 shadow-md rounded-lg"
                    src="https://firebasestorage.googleapis.com/v0/b/near-balkan-films.appspot.com/o/images%2FAdBloc%2F4.jpg?alt=media&amp;token=13f55c87-e4a8-4217-a2df-bd55b641c5c9"
                    alt=""
                  />
                </div>
                <p class="order-last mx-5 font-p-paragraph text-base text-nbgreydark lg:text-sm">
                  A Near-Balkan egy online crowdfunding+streaming-platform, ahol
                  független filmkészítők nyilvánosságot, networking-lehetőséget,
                  finanszírozást találhatnak, míg a közönség a nyertes
                  filmtervek kiválasztási lehetőségét, exklúzív betekintési
                  lehetőséget és egy video-on-demand felületet kap - így a
                  közönség számára a művészeti alkotásba való, minden korábbinál
                  nagyobb filmproduceri/„társművészi” bevonódást lehetővé téve.
                </p>
              </div>
            </div>
            <div
              id="validation"
              class="flex items-center bg-nbgreymain bg-opacity-50 rounded-full w-full h-3"
            >
              <h2 class="bg-nbgreydark pr-3 pl-3 rounded-lg w-auto max-w-fit font-h2-title text-lg text-nbwhite italic">
                validáció
              </h2>
            </div>
            <img
              class="col-span-3 lg:col-span-1 row-span-2 lg:row-span-1 shadow-md rounded-lg"
              src="https://firebasestorage.googleapis.com/v0/b/near-balkan-films.appspot.com/o/images%2FOrsz%C3%A1gok.svg?alt=media&token=ec5bd752-ad01-4bea-98a4-768529ac4521"
              alt=""
            />
            {/* <svg
          class="rounded-lg max-w-sm lg:max-w-screen-xl"
          width="561"
          height="211"
          viewBox="0 0 561 211"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          // xmlns:xlink="http://www.w3.org/1999/xlink"
        >
          <path
            d="M395.224 -217.655H571.005V-149.443C568.983 -150.163 566.967 -150.884 564.862 -151.638C563.856 -148.078 567.694 -145.022 565.941 -141.47C564.594 -142.502 563.607 -144.054 561.654 -142.187C560.6 -141.18 559.066 -140.562 557.47 -139.599C554.979 -141.594 552.06 -143.93 548.979 -146.403C548.451 -144.932 548.104 -143.977 547.758 -143.001C546.85 -143.197 546.166 -143.346 544.882 -143.623C544.882 -142.012 544.848 -140.605 544.887 -139.198C544.955 -136.789 545.292 -134.372 545.097 -131.984C544.936 -130.002 544.091 -128.071 543.676 -126.097C542.636 -121.139 541.073 -116.359 537.47 -112.292C535.414 -109.969 536.288 -107.615 539.521 -106.801C540.126 -106.648 541.112 -106.217 541.117 -105.91C541.132 -104.166 542.396 -104.235 543.773 -104.239C544.35 -104.239 544.926 -104.03 545.634 -103.889C543.148 -101.076 543.578 -98.3556 546.601 -96.3561C548.402 -95.1667 549.564 -93.9985 548.666 -91.6708C547.777 -89.3728 549.027 -88.3369 551.854 -88.0342C553.427 -87.8679 554.97 -87.4842 556.532 -87.2199C559.54 -86.7168 561.684 -83.6515 560.746 -81.1404C560.639 -80.8548 560.429 -80.4924 560.15 -80.3816C557.929 -79.4777 556.322 -78.2286 556.205 -75.8838C556.185 -75.4916 555.541 -75.1292 555.067 -74.6261C552.66 -76.3144 550.092 -77.5252 547.382 -75.9861C546.488 -75.4788 546.439 -73.8289 545.902 -72.4476C544.97 -71.8678 543.207 -71.2453 542.348 -70.0985C541.498 -68.9687 541.298 -67.3146 541.298 -65.8949C541.298 -64.1853 540.648 -63.6652 538.739 -63.695C537.646 -63.7121 536.542 -63.1237 535.443 -62.8125C535.263 -62.3521 534.745 -62.3905 534.545 -62.6335C532.567 -65.0081 528.671 -63.678 526.513 -65.8096C526.249 -66.0697 525.019 -65.6348 524.262 -65.4387C523.075 -65.1317 521.874 -64.3899 520.746 -64.4795C517.089 -64.7736 517.113 -64.8845 516.234 -61.8874C516.132 -61.5421 515.81 -61.2479 515.956 -61.4568C514.203 -61.6316 512.621 -62.2157 511.606 -61.7851C510.087 -61.1413 509.574 -59.6193 510.072 -58.0291C510.795 -55.7397 510.092 -53.655 508.656 -51.7493C507.67 -50.4362 507.138 -49.17 508.134 -47.6864C508.363 -47.3453 508.588 -46.8422 508.471 -46.5054C507.509 -43.7002 507.875 -41.2744 510.141 -38.904C510.81 -38.2048 512.821 -36.2906 510.37 -35.3825C507.06 -36.5208 504.106 -37.5312 501.151 -38.5459C500.956 -38.337 500.761 -38.1281 500.561 -37.9192C500.8 -37.0793 501.088 -36.2479 501.264 -35.3996C501.562 -33.9841 502.25 -32.4792 501.952 -31.149C501.147 -27.4954 502.192 -24.6219 505.419 -22.1961C506.034 -21.7357 506.215 -20.6443 506.259 -19.8343C506.332 -18.3634 505.888 -16.8457 506.147 -15.4132C506.464 -13.6567 506.908 -11.6999 509.975 -12.1134C510.507 -12.1859 511.274 -11.6445 511.742 -11.2267C512.733 -10.3484 513.612 -9.3764 514.506 -8.42142C515.546 -7.31297 516.899 -6.99748 518.1 -7.91409C520.273 -9.56825 522.25 -9.14618 524.291 -7.87572C526.913 -6.24287 529.525 -4.58873 531.689 -3.22873C531.088 -1.57884 530.658 -0.397903 530.15 0.987671C532.582 1.58026 534.55 2.05777 536.435 2.51393C536.229 4.86728 536.132 7.07993 534.76 9.38637C533.69 11.1897 532.646 13.2191 531.879 15.1759C531.059 17.2735 531.508 19.7717 531.552 22.091C531.581 23.7025 532.201 25.3524 531.947 26.9085C531.449 29.9397 531.908 31.4617 535.292 32.2035C538.397 32.8857 538.979 34.7103 539.818 36.8676C541.322 40.7301 542.919 44.6523 546.444 47.513C548.773 49.4016 551.43 50.9919 554.018 52.6247C557.304 54.6967 557.338 54.718 555.775 58.0092C555.385 58.832 555.097 59.7145 554.916 60.5928C554.364 63.2147 552.885 63.8329 550.277 62.5027C547.641 61.1555 544.994 59.7742 541.732 60.3285C539.193 60.7591 537.089 60.4436 535.814 58.1712C535.59 57.7747 534.896 57.4806 534.354 57.3314C529.521 56.014 525.668 57.5659 522.191 60.4393C521.571 60.9509 520.204 61.4412 519.599 61.1854C516.181 59.7444 512.592 59.8382 508.969 59.8552C507.401 59.8595 506.098 60.0002 504.794 61.0404C503.93 61.7311 502.314 61.9101 501.015 61.9528C497.426 62.0721 493.808 61.8164 490.243 62.1063C488.871 62.2171 487.607 63.3938 486.005 64.2336C484.394 63.3128 482.362 61.94 480.116 60.9211C476.972 59.4929 473.949 57.877 470.033 58.0604C467.416 58.184 464.633 57.5659 462.118 56.7942C459.135 55.8776 456.689 53.6479 452.734 54.4323C454.838 52.1856 456.586 50.3694 458.251 48.5021C458.823 47.8626 459.526 47.1165 459.618 46.3662C460.214 41.4932 460.8 36.6118 461.083 31.7175C461.225 29.2661 461.738 27.3093 464.062 25.621C464.863 25.0412 464.599 23.1312 464.394 21.8821C464.35 21.622 462.304 21.2554 461.415 21.524C459.653 22.0569 458.051 22.9991 456.415 23.7579C455.566 22.2956 455.546 20.91 456.869 19.4008C457.997 18.1176 458.598 16.4848 459.565 15.0779C459.77 14.7794 460.595 14.8477 461.088 14.6516C462.226 14.1996 464.223 13.769 464.296 13.1807C464.56 11.0704 464.418 8.85773 463.954 6.76445C463.5 4.70528 460.8 3.40923 461.049 0.970627C461.078 0.672195 460.561 0.198959 460.17 0.0241547C458.793 -0.598282 459.194 -1.44241 459.482 -2.44429C459.843 -3.69344 460.234 -5.04915 460.033 -6.28551C459.697 -8.32762 458.559 -8.6687 456.157 -8.4129C455.063 -8.29779 453.871 -8.82217 452.734 -9.0865C451.484 -9.3764 450.263 -9.82405 448.989 -9.98605C447.621 -10.1609 446.108 -9.80273 444.853 -10.1779C443.066 -10.7151 441.796 -10.4252 440.844 -9.38493C439.57 -9.70468 438.212 -9.71747 437.392 -10.3015C433.862 -12.8297 433.774 -12.7913 430.121 -10.5744C429.047 -9.9221 427.328 -10.1054 425.912 -9.85815C424.672 -9.64072 423.452 -9.31671 422.211 -9.09929C421.415 -8.9586 420.561 -8.76675 419.789 -8.87759C418.12 -9.11208 417.436 -10.0244 417.641 -11.5549C417.714 -12.1092 417.397 -12.8425 416.967 -13.2773C415.742 -14.535 414.238 -15.5923 413.1 -16.9011C412.402 -17.7111 412.089 -17.6642 411.035 -17.3488C409.199 -16.8031 407.182 -16.6027 405.229 -16.4961C404.14 -16.4364 402.382 -20.6059 403.017 -21.4628C403.1 -21.5737 403.115 -21.7826 403.222 -21.8167C406.63 -22.9252 403.325 -23.6883 402.866 -23.8887C401 -24.7157 399.125 -25.3552 398.427 -27.3632C398.271 -27.8066 397.221 -28.3694 396.684 -28.2969C394.438 -27.9899 392.216 -27.5125 390.019 -26.9966C388.774 -26.7067 387.592 -25.8839 386.386 -25.8967C384.428 -25.9137 383.5 -25.2657 382.949 -23.7139C382.719 -23.0616 381.953 -22.5585 381.372 -21.9233C378.427 -25.8668 375.722 -29.4949 373.017 -33.1229C373.154 -33.3318 373.295 -33.5408 373.432 -33.7496C378.051 -31.78 380.39 -34.2527 382.28 -37.058C382.822 -37.8637 382.666 -39.3943 382.143 -40.281C381.533 -41.3127 380.307 -42.434 379.096 -42.7239C377.636 -43.0735 375.913 -42.596 374.165 -42.4638C373.901 -43.0436 373.276 -43.7641 373.315 -44.4548C373.403 -46.0151 372.216 -46.4926 371.01 -47.0895C369.785 -47.6992 368.461 -48.2449 367.451 -49.0719C365.844 -50.3808 364.409 -51.8687 362.998 -53.348C362.392 -53.9832 361.904 -54.7506 361.557 -55.5223C360.586 -57.6923 359.956 -60.0073 358.735 -62.0579C357.309 -64.4539 351.079 -65.5069 348.496 -64.0531C347.983 -63.7675 347.47 -63.4819 346.958 -63.1962C347.016 -63.4222 347.075 -63.6481 347.133 -63.8741C345.839 -64.5477 344.599 -65.6689 343.242 -65.784C341.464 -65.9332 339.619 -64.9484 337.851 -66.2487C337.548 -66.4747 336.479 -65.9077 335.63 -65.6689C335.366 -65.9759 334.946 -66.3297 334.721 -66.7603C333.208 -69.6381 331.762 -72.5414 330.229 -75.4106C329.892 -76.0458 329.018 -76.5233 328.872 -77.1585C328.33 -79.5374 326.65 -80.8548 324.179 -81.4943C324.443 -82.3128 324.741 -83.1101 324.946 -83.9201C325.439 -85.8812 325.053 -87.642 323.735 -89.3728C322.387 -91.1336 321.367 -93.0862 320.244 -94.9706C320.127 -95.1667 320.2 -95.4907 320.288 -95.7252C320.903 -97.277 321.738 -98.7862 322.129 -100.376C322.461 -101.711 322.192 -103.152 322.378 -104.525C322.49 -105.347 322.715 -106.562 323.34 -106.852C325.844 -108.003 328.554 -108.809 331.128 -109.858C331.767 -110.118 332.402 -110.732 332.607 -111.299C332.705 -111.568 331.855 -112.343 331.294 -112.493C329.941 -112.859 328.515 -113.064 327.104 -113.192C326.025 -113.29 325.229 -113.23 324.8 -114.496C324.258 -116.108 323.159 -116.104 321.67 -114.714C320.844 -115.903 320.625 -117.8 318.164 -116.892C320.39 -120.891 322.588 -124.707 324.648 -128.574C326.377 -131.814 328.247 -135.037 329.467 -138.431C330.205 -140.473 330.815 -143.184 328.745 -144.855C326.591 -146.599 323.838 -147.878 321.142 -148.978C318.686 -149.98 316.997 -151.544 317.695 -153.408C318.486 -155.526 317.412 -156.558 315.468 -157.509C314.692 -157.888 314.297 -158.822 313.662 -159.457C312.846 -160.271 311.987 -161.052 311.118 -161.819C310.713 -162.177 310.034 -162.403 309.824 -162.821C309.214 -164.049 308.706 -165.328 308.305 -166.619C308.095 -167.297 308.071 -168.065 308.174 -168.768C308.437 -170.567 308.515 -172.226 306.777 -173.633C303.974 -175.896 301.289 -178.271 298.388 -180.739C298.481 -180.965 298.686 -181.55 298.96 -182.108C301.264 -186.836 300.239 -188.797 294.599 -190.417C294.15 -190.545 293.706 -190.707 293.252 -190.814C290.39 -191.453 287.929 -194.651 288.95 -196.97C290.234 -199.899 292.207 -202.58 295.952 -203.484C297.456 -203.847 298.569 -204.175 299.204 -205.522C299.375 -205.889 300.415 -205.94 301.054 -206.136C301.206 -205.705 301.299 -205.253 301.518 -204.853C301.689 -204.546 301.997 -204.286 302.285 -204.034C303.022 -203.395 303.838 -202.815 304.511 -202.133C305.791 -200.841 308.354 -200.538 309.35 -201.834C310.337 -203.118 311.616 -203.382 313.061 -203.152C315.083 -202.832 317.051 -201.804 319.067 -203.164C319.199 -203.254 319.541 -203.147 319.765 -203.088C321.938 -202.508 324.184 -202.086 326.259 -201.306C333.403 -198.611 340.717 -196.475 348.471 -195.623C348.628 -195.606 348.818 -195.567 348.921 -195.478C350.532 -194.049 352.495 -192.809 353.667 -191.142C357.69 -185.412 352.089 -180.876 346.176 -180.271C342.133 -179.857 337.954 -180.441 333.838 -180.607C333.393 -180.624 332.968 -180.919 332.514 -180.982C330.664 -181.251 328.808 -181.473 326.958 -181.729C324.687 -182.044 322.417 -182.377 320.151 -182.701C320.073 -182.713 319.941 -182.722 319.926 -182.765C319.091 -184.802 317.29 -183.801 315.493 -183.945C315.688 -182.803 315.464 -181.545 316.079 -180.987C318.217 -179.034 320.551 -177.316 323.989 -177.137C328.393 -176.907 330.512 -176.634 331.782 -171.71C332.075 -170.584 332.207 -169.318 332.91 -168.406C333.867 -167.165 335.664 -166.376 336.45 -165.089C338.315 -162.032 340.991 -160.472 344.941 -160.51C345.224 -160.51 345.517 -160.288 345.791 -160.148C349.463 -158.242 353.383 -158.656 357.241 -159.414C357.993 -159.564 358.916 -160.698 359.013 -161.452C359.316 -163.81 357.358 -165.238 354.033 -164.735C351.801 -164.398 350.429 -165.323 348.984 -166.274C348.398 -166.662 347.783 -167.753 348.012 -168.176C348.344 -168.785 349.482 -169.467 350.195 -169.408C351.108 -169.331 352.143 -168.691 352.768 -168.035C354.253 -166.479 355.405 -166.3 357.446 -167.344C358.061 -167.66 359.072 -167.591 359.838 -167.451C363.149 -166.841 365.532 -168.414 365.42 -171.262C365.405 -171.671 365.205 -172.243 364.858 -172.447C363.291 -173.377 361.543 -174.093 360.068 -175.116C359.472 -175.53 358.979 -177.06 359.179 -177.188C362.08 -179.026 361.274 -182.104 362.504 -184.474C363.208 -185.834 365.717 -187.028 367.456 -186.525C369.589 -185.902 371.718 -185.28 373.852 -184.662C374.086 -184.811 374.326 -184.964 374.56 -185.114C373.813 -187.002 372.963 -188.865 372.338 -190.788C371.689 -192.796 370.239 -193.939 368.081 -194.706C365.932 -195.469 363.149 -195.665 362.197 -197.861C360.786 -201.114 358.735 -203.736 354.814 -205.104C357.934 -205.599 360.922 -206.106 363.901 -206.076C365.19 -206.063 366.645 -205.1 367.636 -204.226C367.919 -203.974 367.031 -202.401 366.347 -201.677C364.648 -199.882 365.097 -197.375 367.495 -196.36C369.775 -195.397 372.065 -194.437 374.37 -193.521C377.641 -192.221 380.893 -194.032 380.507 -197.132C380.297 -198.795 379.287 -200.38 378.754 -201.711C379.453 -202.593 380.517 -203.326 380.473 -204C380.292 -206.699 381.259 -208.864 383.579 -210.6C384.848 -211.55 386.142 -212.48 387.548 -213.507C388.549 -212.765 389.062 -209.615 391.87 -212.322C391.938 -212.386 392.25 -212.275 392.441 -212.228C394.58 -211.712 395.971 -212.684 395.117 -214.313C394.438 -215.605 394.619 -216.581 395.244 -217.689L395.224 -217.655Z"
            class="fill-nbgreenmain hover:fill-nbbluemain active:fill-nborangemain"
          />
          <path
            d="M570.994 29.6143C567.239 26.5959 563.557 23.4965 559.676 20.6017C558.538 19.7533 556.848 19.4549 555.384 18.9731C554.602 18.7173 553.758 18.6022 552.454 18.3208C553.655 17.093 554.773 16.2489 555.423 15.1873C555.901 14.4114 556.282 13.0216 555.818 12.4673C552.029 7.92694 553.836 5.83365 557.62 3.25435C560.169 1.5192 561.526 -3.78009 559.29 -5.80515C557.063 -7.81743 556.131 -10.2645 554.861 -12.6392C553.304 -15.5468 552.405 -14.8945 549.788 -13.8798C548.211 -13.2659 546.717 -12.4516 545.091 -11.9741C542.395 -11.1854 541.131 -9.42043 540.33 -7.24614C539.431 -4.8118 538.631 -2.33908 537.557 0.0355682C537.322 0.547165 536.087 1.0204 535.345 0.982025C534.207 0.926605 533.094 0.419266 532.005 0.112305C532.024 -0.160553 531.975 -0.335342 532.054 -0.429138C534.016 -2.7569 535.179 -2.89757 531.526 -5.07185C529.158 -6.483 526.888 -8.02632 524.51 -9.42896C522.405 -10.6738 520.252 -10.887 518.138 -9.33942C517.737 -9.04524 517.156 -8.93442 516.477 -8.66583C515.55 -9.65491 514.734 -10.7165 513.694 -11.5691C512.933 -12.1916 511.936 -12.7756 510.94 -12.9675C508.377 -13.4706 506.394 -15.9859 507.386 -18.1943C508.436 -20.522 507.659 -22.0568 505.794 -23.8005C503.914 -25.5655 502.464 -27.5821 503.421 -30.4854C503.987 -32.2077 503.143 -34.284 502.898 -36.5648C504.646 -35.8571 506.331 -35.0769 508.099 -34.4971C509.08 -34.1731 510.364 -33.8363 511.204 -34.1432C511.853 -34.382 512.474 -35.6994 512.312 -36.39C511.941 -37.9632 511.014 -39.4297 510.433 -40.9773C509.998 -42.1284 509.661 -43.3221 509.446 -44.5201C508.724 -48.4935 510.467 -52.0662 511.849 -55.7113C512.112 -56.4019 512.068 -57.3441 511.736 -58.0049C511.053 -59.3606 511.614 -60.111 512.85 -60.7505C515.828 -58.751 516.409 -58.9087 517.532 -62.0593C517.913 -63.1209 518.079 -64.0801 519.915 -63.4022C520.73 -63.1038 521.932 -63.5216 522.933 -63.7135C523.86 -63.8883 524.881 -64.5619 525.642 -64.3615C528.059 -63.7348 530.618 -63.1251 532.659 -61.9101C534.676 -60.7078 535.472 -60.4307 537.312 -61.9186C537.791 -62.3066 538.694 -62.4089 539.412 -62.443C541.966 -62.5624 542.557 -63.1209 542.703 -65.3719C542.776 -66.54 543.152 -67.6911 543.391 -68.8507C543.675 -70.1979 544.617 -70.8502 546.16 -71.0037C547.698 -71.1572 548.489 -71.6986 547.796 -73.2632C547.571 -73.7706 547.991 -74.9515 548.47 -75.1434C549.256 -75.4546 550.379 -75.3565 551.272 -75.1434C552.078 -74.9558 552.718 -74.1926 553.523 -74.0221C556.77 -73.34 557.674 -74.1031 557.908 -77.3432C559.285 -78.2129 560.638 -78.9249 561.8 -79.833C563.758 -81.3635 562.141 -83.137 561.824 -84.6761C560.96 -88.8072 556.912 -88.6665 553.357 -88.8626C550.232 -89.0374 549.363 -89.8133 550.037 -92.3287C550.896 -95.5262 550.74 -95.8075 547.2 -97.547C545.496 -98.3826 544.895 -100.736 545.891 -102.168C546.38 -102.876 547.102 -104.185 546.819 -104.432C546.121 -105.038 544.905 -105.204 543.885 -105.515C543.592 -105.605 543.255 -105.57 542.937 -105.592C543.045 -105.758 543.147 -105.924 543.255 -106.091C542.278 -106.662 541.375 -107.37 540.315 -107.775C537.718 -108.764 537.298 -110.102 539.012 -111.936C542.224 -115.368 543.557 -119.507 544.637 -123.732C545.183 -125.889 545.896 -128.021 546.282 -130.2C546.941 -133.909 547.556 -137.652 545.364 -141.791C546.424 -141.791 547.278 -141.629 547.991 -141.838C548.694 -142.047 549.251 -142.631 550.296 -143.339C551.575 -142.367 553.279 -141.25 554.729 -139.924C556.062 -138.705 557.386 -137.848 558.841 -138.338C560.545 -139.698 561.897 -140.777 562.962 -141.625C564.392 -140.896 565.471 -140.346 566.389 -139.877C569.583 -143.232 566.902 -146.063 566.228 -149.133C567.815 -148.949 569.407 -148.762 570.999 -148.579V29.6271L570.994 29.6143Z"
            class="fill-nbgreenmain hover:fill-nbbluemain active:fill-nborangemain"
          />
          <path
            d="M571 206.116C568.143 205.561 565.238 205.139 562.435 204.423C555.809 202.731 549.491 200.092 542.255 200.48C539.388 200.633 536.351 200.023 533.563 199.277C529.711 198.246 526.307 199.652 522.733 200.185C521.566 200.36 520.424 200.936 519.286 200.897C518.378 200.867 517.089 200.381 516.678 199.746C514.921 197.031 513.305 194.23 511.879 191.369C510.819 189.237 513.06 187.945 514.183 186.521C516.991 182.974 520.297 179.717 522.987 176.106C525.341 172.947 527.382 169.562 529.056 166.092C529.818 164.514 529.54 162.481 529.427 160.669C529.261 157.949 528.959 155.225 528.461 152.535C528.187 151.055 527.552 149.589 526.82 148.229C525.819 146.366 525.78 144.677 526.932 142.844C528.47 140.388 530.555 137.941 531.024 135.307C531.556 132.314 533.324 130.259 535.448 128.387C536.664 127.317 538.788 127.036 540.511 126.409C541.932 125.889 543.363 125.386 545.155 124.742C547.152 125.569 548.451 124.994 549.877 122.201C550.028 122.222 550.316 122.257 550.316 122.274C550.106 124.81 552.967 125.765 554.11 127.637C555.028 129.142 557.259 130.237 559.174 131.022C561.195 131.849 563.514 132.015 565.731 130.549C565.194 131.495 564.701 132.463 564.11 133.384C563.041 135.042 564.213 135.805 565.575 136.684C566.161 137.059 566.752 138.014 566.615 138.568C565.863 141.608 564.471 144.566 564.115 147.623C563.846 149.921 564.217 152.611 565.438 154.594C566.254 155.915 569.071 156.299 570.99 157.105V206.133L571 206.116Z"
            class="fill-nbgreenmain hover:fill-nbbluemain active:fill-nborangemain"
          />
          <path
            d="M147.659 218.905H25.1006C26.3896 215.098 22.4297 212.795 21.2773 209.606C25.3935 209.129 29.207 208.758 32.9814 208.208C34.2216 208.029 35.3789 207.394 36.5751 206.972C37.791 206.541 39.0068 205.761 40.2275 205.752C45.203 205.718 49.4267 204.346 53.2694 201.527C56.2333 199.353 59.6805 197.844 63.87 198.505C66.2186 198.876 68.6209 199.268 70.9891 199.234C73.9383 199.191 76.8924 198.795 79.8221 198.424C84.0213 197.891 88.1472 198.825 92.4783 198.317C98.2644 197.639 104.08 199.281 109.094 202.431C110.276 203.173 112.161 203.698 113.518 203.455C117.146 202.815 120.691 201.779 124.207 200.739C125.257 200.428 125.896 200.18 126.941 200.879C129.622 202.674 132.688 202.563 135.852 201.941C136.873 201.741 138.215 201.843 139.109 202.278C142.112 203.744 145.169 204.06 148.513 203.472C149.524 203.292 151.077 203.506 151.672 204.09C152.146 204.554 151.804 205.961 151.384 206.776C149.378 210.651 147.146 214.445 147.649 218.905H147.659Z"
            class="fill-nbgreenmain hover:fill-nbbluemain active:fill-nborangemain"
          />
          <path
            d="M570.995 59.8844C566.928 60.7114 565.424 57.5609 562.963 55.911C562.284 55.4548 561.781 54.5851 561.059 54.4401C555.912 53.4127 552.895 49.6269 548.793 47.2607C546.991 46.2205 545.707 44.2636 544.657 42.5072C543.017 39.7616 541.874 36.7901 540.322 33.9977C539.775 33.0086 538.793 32.0706 537.739 31.4653C536.508 30.7575 534.985 30.4421 533.481 29.9177C533.481 28.9968 533.554 28.1484 533.466 27.3128C533.178 24.6056 532.587 21.8984 532.602 19.1955C532.612 17.7161 533.588 16.2367 534.159 14.7616C534.56 13.7171 535.029 12.6897 535.424 11.6452C535.522 11.3851 535.4 11.0569 535.507 10.8053C538.085 4.76423 539.35 -1.64777 542.309 -7.56948C542.787 -8.52872 543.627 -9.57322 544.633 -10.0678C547.084 -11.2785 549.731 -12.1952 552.514 -13.3164C552.812 -12.8645 553.197 -12.2847 553.573 -11.7049C555.092 -9.35581 556.562 -6.98541 558.134 -4.66618C559.584 -2.52174 558.554 1.0509 555.942 2.64964C552.489 4.75997 551.733 6.33738 552.763 9.78638C553.149 11.0739 553.837 12.2932 554.56 13.9388C554.076 14.4291 553.193 15.2818 552.362 16.1728C550.624 18.0486 551.083 19.5408 553.813 19.8478C557.831 20.3039 559.706 23.2286 562.46 25.1087C563.93 26.1105 564.863 27.7093 566.322 28.7197C567.68 29.6619 569.423 30.182 570.995 30.8854V59.8758V59.8844Z"
            class="fill-nbgreenmain hover:fill-nbbluemain active:fill-nborangemain"
          />
          <path
            d="M570.994 155.808C570.633 155.668 570.276 155.514 569.905 155.395C566.385 154.24 564.505 150.143 565.623 147.035C566.707 144.025 567.317 140.878 568.04 137.775C568.304 136.636 567.796 135.809 566.424 135.276C565.955 135.093 565.682 134.04 565.76 133.426C565.828 132.876 566.775 132.416 566.849 131.866C566.966 131.013 566.902 129.999 566.429 129.308C566.233 129.022 564.637 129.188 563.904 129.521C561.15 130.774 559.974 130.536 558.025 128.575C556.57 127.112 554.749 125.927 553.147 124.563C552.791 124.256 552.493 123.744 552.474 123.314C552.43 122.124 551.932 121.395 550.55 121.046C550.11 120.935 549.695 120.325 549.534 119.873C548.885 118.061 547.781 116.667 545.804 115.716C544.92 115.29 543.685 114.22 543.802 113.619C544.505 110.055 541.873 107.548 540.462 104.67C539.71 103.131 538.719 101.682 537.962 100.147C537.806 99.8272 538.055 99.1493 538.377 98.8935C539.661 97.8703 540.511 96.958 539.017 95.4616C538.66 95.1035 539.178 94.0845 539.29 93.3683C539.93 93.5729 540.623 93.7051 541.204 93.9993C543.65 95.2399 545.926 96.8301 548.523 97.7168C551.521 98.74 555.472 96.7107 557.4 93.2702C559.51 89.5057 561.219 85.575 563.211 81.7593C563.436 81.333 564.393 81.2051 565.008 80.9365C565.223 81.559 565.496 82.1772 565.628 82.8124C565.672 83.0341 565.311 83.2941 565.257 83.5585C565.169 83.9635 565.188 84.3813 565.164 84.7735C566.185 85.0762 567.122 85.3533 568.045 85.6304C567.957 85.9544 567.947 86.0994 567.879 86.2188C567.327 87.178 566.761 88.1287 566.199 89.0837C567.796 89.5867 569.393 90.0941 570.989 90.5971V155.826L570.994 155.808Z"
            class="fill-nbgreenmain hover:fill-nbbluemain active:fill-nborangemain"
          />
          <path
            d="M498.73 218.905C498.72 218.479 498.905 217.929 498.671 217.647C496.684 215.268 499.203 214.526 500.688 213.614C505.302 210.77 510.024 208.051 514.706 205.288C514.77 205.25 514.901 205.275 514.936 205.232C518.485 200.436 524.75 201.664 529.794 200.206C530.736 199.933 531.972 200.453 533.08 200.573C535.775 200.867 538.476 201.408 541.161 201.361C545.238 201.293 549.037 201.933 552.909 203.033C558.852 204.721 564.96 205.961 571 207.39V218.901H498.735L498.73 218.905Z"
            class="fill-nbgreenmain hover:fill-nbbluemain active:fill-nborangemain"
          />
          <path
            d="M23.6365 218.905H-54C-54 218.048 -54 217.196 -54 216.347C-52.8525 215.627 -51.8125 214.552 -50.5332 214.254C-45.6504 213.111 -40.6748 212.267 -35.7676 211.206C-33.546 210.724 -30.9385 210.95 -29.4639 208.852C-26.4366 204.542 -23.3458 200.262 -20.3282 195.947C-17.4669 191.863 -16.4611 191.109 -12.4376 191.855C-12.1398 193.355 -11.549 194.928 -11.5929 196.489C-11.6466 198.437 -10.6749 199.32 -8.69253 199.737C-6.54898 200.189 -4.40055 200.641 -2.29606 201.213C-0.880051 201.596 0.443188 202.568 1.83967 202.615C5.53106 202.743 8.59746 204.12 11.5662 205.749C12.9822 206.525 14.0222 208.025 15.5115 208.447C18.2752 209.228 20.0134 210.443 21.4734 212.753C22.7478 214.774 24.0271 216.539 23.6365 218.905Z"
            class="fill-nbgreenmain hover:fill-nbbluemain active:fill-nborangemain"
          />
          <path
            d="M570.997 89.727C570.05 89.3902 569.102 89.0577 568.077 88.691C568.585 87.6252 569.444 86.6233 569.4 85.6513C569.371 84.982 568.087 84.3595 566.954 84.0398C567.003 83.5111 567.198 82.9484 567.061 82.4581C566.827 81.5969 566.505 80.1389 566.007 80.0664C564.503 79.8575 562.54 79.2521 561.617 81.1024C560.929 82.488 560.362 83.9247 559.767 85.3486C558.853 87.5271 557.965 89.7142 556.92 92.2466C555.86 90.6862 554.976 89.7014 554.493 88.5887C553.824 87.0454 552.467 86.8578 550.929 86.7427C547.174 86.4613 547.105 86.4528 547.105 83.136C547.105 82.019 546.583 81.5585 545.514 81.162C543.912 80.5652 542.081 80.0536 542.613 77.9134C542.696 77.5851 542.398 77.0053 542.066 76.8007C540.055 75.5644 537.979 74.4005 535.914 73.2068C536.393 71.284 539.449 69.745 541.935 70.1883C542.711 70.3248 543.512 70.5848 544.269 70.5124C545.411 70.4015 547.14 71.2371 547.491 69.519C547.823 67.8862 547.716 66.2746 545.567 65.4007C544.718 65.0553 543.722 64.5992 543.292 63.9426C542.833 63.2477 542.965 62.2586 542.843 61.3974C543.077 61.2908 543.312 61.1843 543.546 61.0777C545.572 62.0369 547.613 62.9748 549.625 63.9554C551.934 65.0809 555.167 63.8616 555.899 61.6703C556.627 59.5045 557.535 57.3857 558.604 54.623C561.002 56.4818 563.058 58.1403 565.196 59.7049C566.148 60.4041 567.208 61.1459 568.355 61.4273C569.102 61.6106 570.103 60.9967 570.987 60.7409V89.7313L570.997 89.727Z"
            class="fill-nbgreenmain hover:fill-nbbluemain active:fill-nborangemain"
          />
          <path
            d="M177.445 218.906H148.637C149.11 216.954 149.418 214.954 150.102 213.061C150.907 210.831 152.626 208.738 152.86 206.5C153.09 204.304 153.607 203.311 156.103 202.561C159.56 201.52 162.763 199.836 166.112 198.408C167.509 201.277 168.148 201.461 170.946 200.54C172.348 201.61 173.441 203.059 174.833 203.332C176.142 203.588 177.772 202.603 179.345 202.139C182.123 205.507 182.055 206.854 178.964 210.154C178.026 211.155 177.235 212.277 176.478 213.398C175.097 215.44 176.933 217.094 177.445 218.91V218.906Z"
            class="fill-nbgreenmain hover:fill-nbbluemain active:fill-nborangemain"
          />
          <path
            d="M481.641 218.905C481.768 216.415 481.904 213.925 482.026 211.435C482.129 209.338 483.701 209.351 485.41 209.687C486.411 209.883 487.358 210.288 488.359 210.51C489.126 210.681 490.137 211.017 490.688 210.74C493.608 209.287 497.114 208.562 499.126 205.91C500.923 203.54 502.651 201.127 504.477 198.773C506.304 196.416 508.208 194.105 510.249 191.568C512.275 195.128 514.224 198.556 516.46 202.482C511.636 205.471 506.645 208.579 501.631 211.653C500.918 212.088 500.005 212.271 499.297 212.714C498.218 213.392 496.772 214.036 496.367 214.982C496.02 215.797 496.919 217.012 497.236 218.06C497.314 218.329 497.266 218.627 497.275 218.909H481.65L481.641 218.905Z"
            class="fill-nbgreenmain hover:fill-nbbluemain active:fill-nborangemain"
          />
          <path
            d="M475.293 218.905C475.498 215.238 475.703 211.568 475.898 208.025C477.715 207.825 478.848 207.701 480.176 207.552C480.312 208.583 480.703 209.901 480.581 211.176C480.508 211.926 479.595 213.248 479.111 213.23C476.489 213.137 476.65 214.569 476.777 216.027C476.86 216.991 477.09 217.941 477.251 218.901H475.298L475.293 218.905Z"
            class="fill-nbgreenmain hover:fill-nbbluemain active:fill-nborangemain"
          />
          <path
            d="M537.924 91.1332C537.788 93.5334 537.685 95.3112 537.553 97.6006C535.707 98.9478 535.8 99.2292 537.69 101.936C538.662 103.33 538.984 105.057 539.775 106.562C541.088 109.069 542.792 111.388 542.368 114.424C542.265 115.165 543.832 116.321 544.907 116.909C547.543 118.363 550.043 121.36 546.874 123.692C545.463 122.686 544.316 122.912 542.729 123.862C540.976 124.916 538.691 125.291 536.635 125.956C536.127 126.122 535.419 126.126 535.126 126.437C533.115 128.595 531.254 130.697 527.666 131.187C526.298 131.374 525.297 133.135 523.935 133.92C521.762 135.173 519.165 135.953 517.231 137.42C515.307 138.874 513.896 140.877 512.397 142.728C509.726 146.036 506.323 148.483 501.967 149.903C501.743 149.975 501.479 150.235 501.333 150.188C496.025 148.457 493.447 151.659 491.049 154.737C489.736 156.421 487.856 156.622 486.015 157.056C484.653 157.38 483.208 157.427 481.635 157.615V164.564C480.146 165.059 479.892 166.406 480.278 168.158C480.381 168.631 479.472 169.578 478.803 169.808C477.661 170.2 476.367 169.817 476.372 168.567C476.372 167.429 476.958 166.295 477.26 165.157C477.597 163.886 478.125 162.612 478.154 161.328C478.173 160.497 477.456 158.941 477.08 158.945C475.825 158.954 473.808 159.231 473.462 159.926C471.924 163.021 468.642 163.464 465.688 163.937C461.972 164.53 460.454 166.952 458.882 169.241C456.176 173.185 453.393 176.881 447.837 178.015C447.685 178.045 447.524 178.126 447.422 178.228C444.697 180.901 442.192 179.021 439.433 178.143C435.81 176.987 432.036 175.994 428.232 175.542C426.196 175.299 423.935 176.284 421.821 176.851C421.328 176.983 420.713 177.644 420.683 178.096C420.483 180.841 418.818 182.854 416.929 184.926C413.462 188.728 407.842 188.699 404.502 184.678C404.267 184.397 403.911 183.996 403.599 183.988C401.084 183.894 398.559 183.954 396.055 183.783C395.425 183.74 394.424 183.105 394.326 182.628C394.028 181.157 393.105 180.812 391.626 180.961C391.226 180.999 390.786 180.884 390.41 180.978C386.645 181.92 384.727 179.17 382.148 177.793C381.748 177.58 381.65 176.817 381.577 176.292C381.484 175.593 381.675 174.851 381.523 174.169C381.191 172.669 381.24 171.117 378.477 170.997C375.933 170.887 373.433 169.932 370.928 169.318C368.701 168.776 368.057 167.152 369.507 165.8C371.235 168.235 372.72 168.819 374.683 167.719C375.142 167.463 375.601 166.896 375.64 166.444C375.762 164.952 375.713 163.447 375.688 161.946C375.664 160.595 375.854 159.397 373.955 158.442C373.13 158.024 373.54 155.76 373.359 154.336C373.218 153.228 373.442 151.766 372.729 151.131C372.153 150.619 370.317 150.866 369.204 151.199C366.465 152.017 364.883 151.642 364.434 149.745C364.351 149.383 364.292 148.914 364.482 148.624C365.908 146.454 367.305 144.258 368.926 142.203C369.429 141.564 370.552 141.052 371.46 140.937C375.078 140.481 378.73 140.204 382.192 139.875C382.515 138.869 382.7 138.289 382.895 137.68C385.869 139.193 393.447 137.326 395.493 135.65C395.713 135.471 395.884 135.186 395.942 134.926C396.426 132.803 397.353 131.063 399.873 130.104C400.478 129.874 400.532 128.535 400.928 127.465C398.726 126.962 396.831 126.531 394.092 125.909C395.391 125.367 396.157 124.873 397.007 124.724C399.888 124.208 402.793 123.786 405.693 123.376C407.109 123.176 408.574 123.202 409.961 122.908C413.476 122.157 416.333 120.512 418.198 117.736C421.499 112.816 426.528 109.282 431.23 105.513C432.329 104.631 434.023 104.14 435.537 103.855C440.464 102.921 445.049 101.357 449.179 98.8199C451.621 101.229 453.618 102.418 456.806 100.103C457.905 99.3059 458.53 99.3485 459.243 100.474C459.819 101.378 460.576 102.248 461.45 102.942C463.017 104.187 464.751 104.047 466.552 103.156C467.275 102.798 468.452 102.337 468.969 102.601C473.637 104.985 478.144 103.305 482.612 102.252C484.311 101.851 485.737 100.628 487.402 100.018C490.454 98.9052 493.535 97.7839 496.709 97.0165C500.747 96.0402 502.71 93.1582 505.019 90.6216C506.279 89.2403 507.08 87.5222 507.998 85.9149C509.082 84.0092 510.605 82.7686 513.144 82.4105C514.165 82.2655 515.043 81.4043 516.005 80.897C516.66 80.5517 517.334 79.9889 518.017 79.9719C522.939 79.8354 526.586 82.4616 527.582 86.6823C527.836 87.7652 528.222 88.8267 528.53 89.9011C529.199 92.2374 532.851 93.4695 535.253 92.2033C536.074 91.7684 537.006 91.4955 537.934 91.1332H537.924Z"
            class="fill-nbgreenmain hover:fill-nbbluemain active:fill-nborangemain"
          />
          <path
            d="M147.866 105.653C145.063 107.615 142.329 108.395 140.156 110.497C137.529 113.033 133.672 114.636 130.21 116.435C129.614 116.742 128.266 116.103 127.353 115.74C125.698 115.084 124.092 114.325 122.495 113.566C120.464 112.603 118.637 111.473 115.996 111.771C114.77 111.908 113.31 110.833 112.031 110.194C109.028 108.697 105.996 108.778 102.9 109.891C101.211 110.497 99.5018 111.072 97.827 111.707C95.825 112.466 95.0633 113.992 94.9607 115.74C94.8436 117.787 94.9314 119.837 94.9314 121.803C93.2908 122.174 91.8651 122.613 90.3953 122.783C89.536 122.886 88.5985 122.6 87.7147 122.421C86.7235 122.221 85.742 121.713 84.7703 121.743C82.9149 121.803 82.0653 121.359 82.1532 119.59C82.1776 119.032 81.2254 117.927 80.7518 117.945C77.4413 118.051 75.3075 116.15 73.0126 114.636C71.2401 113.468 69.3505 113.17 67.5585 114.27C65.869 115.31 63.0224 115.088 61.3866 113.98C60.5468 113.413 59.4384 113.144 58.4521 112.739C57.8954 112.509 57.1191 112.406 56.8212 112.023C54.9658 109.623 52.1093 108.672 49.0234 107.747C49.2285 105.517 49.3554 103.189 46.4111 103.019C48.2177 100.243 50.1562 97.5105 51.7968 94.6499C53.1396 92.3093 54.2773 89.8579 55.2392 87.3767C56.4062 84.3711 57.2509 81.2716 58.3251 78.2404C58.8818 76.6715 59.3554 74.9961 60.371 73.6574C61.2353 72.5148 61.206 71.6792 60.8398 70.4642C60.2929 68.6608 59.8388 66.7594 59.8876 64.9134C59.9316 63.2294 58.7206 62.5302 57.5146 62.1167C53.9111 60.8846 54.3456 57.7212 53.0126 55.4233C52.8808 55.1973 53.4912 54.609 53.8085 54.2253C55.5224 52.1533 55.1757 49.8938 53.1494 48.2055C52.3388 47.5319 52.0898 46.3681 51.3867 45.558C48.7646 42.514 45.166 40.8045 41.206 39.2526C39.0869 38.4213 37.4219 37.1124 34.458 38.5407C35.957 35.3304 39.7558 32.879 34.3945 30.1462C35.9668 29.7242 36.9385 29.3149 37.9541 29.2126C41.4551 28.863 44.9707 28.4281 48.4814 28.4324C49.8974 28.4324 51.289 29.5323 52.7294 30.0524C55.5712 31.0714 58.3593 32.3887 61.328 32.9302C64.6483 33.5356 66.0595 31.6384 66.0497 29.0591C66.0399 26.1387 65.4882 23.2184 65.1415 20.3023C65.0829 19.829 64.8681 19.3686 64.7265 18.9039C67.4267 17.9148 68.7255 19.7054 69.1747 25.0516C69.287 25.1326 69.4481 25.3074 69.5165 25.2818C73.4423 23.8749 76.5624 27.0511 80.3807 26.7057C82.4168 26.5224 83.5692 25.738 83.618 24.2544C83.7059 21.5045 86.0057 20.9162 88.1932 20.298C89.9949 19.7907 91.9432 19.6756 93.8182 19.3601C96.3768 18.9295 99.326 15.8685 99.3016 13.4256C99.2478 8.03253 102.456 7.09885 106.553 6.58299C107.168 6.50625 107.768 6.35277 108.384 6.2334C109.111 10.6672 109.761 11.23 113.833 10.6459C113.911 11.9036 113.984 13.1357 114.072 14.5085C114.585 14.5682 115.117 14.6406 115.649 14.6833C115.971 14.7088 116.308 14.6577 116.621 14.7088C116.924 14.76 117.466 14.9518 117.456 15.003C116.797 17.7784 121.269 16.9727 121.372 19.3345C121.416 20.3407 121.899 21.7689 122.734 22.208C124.057 22.9029 125.468 22.1568 126.499 21.0611C126.904 20.6306 127.583 20.4003 128.628 19.7907C128.628 21.2743 128.349 22.3188 128.696 23.1715C129.189 24.3865 130.107 25.4737 130.913 26.5779C131.103 26.8422 131.733 26.8848 131.875 27.1449C133.442 30.0141 136.606 29.2382 139.228 29.5707C141.152 29.8137 143.032 29.916 143.418 32.0263C143.823 34.2475 146.113 34.482 147.846 34.951C151.396 35.9102 155.078 36.4985 159.277 37.3554C158.007 38.7666 156.923 39.8282 156.02 41.0006C153.393 44.3942 152.163 48.2268 151.582 52.2514C151.44 53.2192 151.606 54.4257 151.001 55.0822C150.234 55.9178 148.842 56.762 147.695 56.7918C145.366 56.8472 143.696 57.1158 143.686 59.5501C143.686 59.7761 143.383 60.0703 143.13 60.211C139.575 62.2105 137.71 65.425 135.258 68.2515C133.34 70.4599 133.022 72.873 132.417 75.3457C135.527 75.8701 136.645 75.3499 140.42 71.6451C140.932 72.8858 141.347 73.9516 141.811 75.0004C142.104 75.6612 142.617 76.2751 142.739 76.9487C142.827 77.4219 142.612 78.1552 142.221 78.4366C140.322 79.8008 140.576 81.2631 141.567 82.9471C142.207 84.03 142.964 85.245 142.934 86.3833C142.91 87.2104 141.865 88.2549 140.957 88.7836C137.475 90.8214 137.368 91.7892 140.473 94.0573C140.893 94.3642 141.049 95.4599 140.757 95.9033C138.452 99.4034 140.141 103.59 145.175 103.867C146.128 103.918 147.002 105.035 147.881 105.641L147.866 105.653Z"
            class="fill-nbgreenmain hover:fill-nbbluemain active:fill-nborangemain"
          />
          <g style="mix-blend-mode: screen">
            <rect
              x="87.2617"
              y="53.125"
              width="22.2616"
              height="22.2616"
              fill="url(#pattern0_0_1)"
            />
          </g>
          <path
            d="M310.602 -3.62996C313.595 -2.52576 314.674 -2.94356 315.709 -5.32674C316.339 -6.76773 317.169 -8.09362 319.625 -7.9913C321.246 -7.92309 322.892 -8.98039 324.576 -9.1296C327.003 -9.34277 329.478 -9.19355 331.93 -9.19355C332.906 -9.19355 334.005 -8.9207 334.835 -9.2234C337.906 -10.3319 340.333 -8.75443 342.725 -7.74403C345.792 -6.44799 348.336 -7.18128 350.777 -8.59669C352.11 -9.36835 353.072 -9.64545 354.683 -9.10828C355.694 -8.76722 357.271 -9.2234 358.37 -9.70515C359.444 -10.1784 360.108 -10.3958 360.963 -9.49624C362.115 -8.2812 363.599 -8.40058 364.796 -9.31292C366.768 -10.8136 368.565 -11.257 370.811 -9.66252C371.72 -9.01876 373.106 -8.8866 374.273 -8.51995C374.537 -8.69475 374.801 -8.86954 375.069 -9.04433C374.586 -10.0547 374.166 -11.0992 373.599 -12.0755C372.169 -14.5483 372.017 -18.4577 376.666 -19.434C378.819 -19.8859 380.997 -20.406 382.984 -21.2288C383.8 -21.5699 384.219 -22.7636 384.664 -23.6333C385.255 -24.7929 385.958 -25.1596 387.501 -24.7844C388.389 -24.567 389.551 -25.0999 390.548 -25.3983C391.143 -25.5774 391.68 -25.927 392.217 -26.2382C395.626 -28.2249 397.32 -25.846 399.327 -24.1577C400.006 -23.5864 400.855 -23.1644 401.798 -22.5632C400.02 -20.001 401.426 -17.2981 403.414 -15.7633C405.455 -14.1901 408.721 -14.8936 411.573 -16.0063C411.924 -15.5416 412.364 -15.0641 412.672 -14.5269C413.843 -12.4891 416.129 -11.3039 417.134 -8.89511C418.111 -6.56309 420.938 -6.83595 423.687 -8.63933C423.936 -8.80133 424.41 -8.90365 424.678 -8.80986C428.179 -7.56924 430.914 -8.54553 433.184 -10.9671C433.326 -11.1163 433.57 -11.1888 433.56 -11.1845C435.44 -10.1826 437.129 -9.15944 438.951 -8.36647C439.703 -8.0382 441.099 -7.83356 441.568 -8.20021C443.023 -9.32572 444.297 -9.05713 445.792 -8.44747C446.226 -8.27268 446.876 -8.44747 447.413 -8.52421C449.122 -8.78427 450.528 -8.9676 452.164 -7.6673C453.233 -6.81464 455.543 -7.14717 458.038 -6.8658C458.824 -6.07282 459.131 -4.65314 458.16 -2.8924C457.447 -1.60489 456.954 -0.117004 458.809 0.965872C459.131 1.15346 459.585 1.52436 459.551 1.75884C459.214 3.86064 461.329 4.9478 462.037 6.57211C462.754 8.22201 463.15 10.0467 463.213 11.8032C463.233 12.3148 461.705 13.1631 460.752 13.3507C458.399 13.8197 456.768 14.6724 456.719 17.0001C456.714 17.2559 456.578 17.5799 456.373 17.7462C453.78 19.8352 453.755 22.2141 455.215 24.5206C452.94 26.4433 450.367 27.9994 448.77 30.114C446.275 33.4181 442.862 35.4943 439.068 37.3403C438.423 37.6515 437.96 38.3251 437.549 38.9049C436.382 40.5633 435.479 42.388 434.122 43.91C432.418 45.82 432.818 47.6958 433.814 49.5333C434.659 51.0894 435.943 52.4622 436.993 53.9373C438.331 55.8174 440.123 55.9453 442.364 55.2674C446.075 54.1419 446.104 54.2059 449.542 55.7577C447.696 56.3759 446.353 57.1134 444.932 57.2413C442.574 57.4545 441.104 58.1409 440.035 60.1788C439.297 61.5899 437.398 62.5406 436.016 63.696C434.376 65.0688 433.238 66.5737 432.588 68.6073C432.3 69.5026 429.708 69.8948 428.106 70.3765C427.715 70.4959 427.11 70.0696 426.519 69.8607C426.285 67.3624 427.12 64.6765 424.195 62.6983C421.876 61.1295 420.006 58.9808 416.431 60.7884C416.895 57.6549 418.99 55.9922 421.236 54.5C423.389 53.0718 423.638 52.3641 422.383 50.386C420.972 50.2794 419.747 50.062 418.541 50.1259C417.398 50.1856 416.207 50.3945 415.157 50.7825C412.261 51.8568 409.42 52.9098 406.138 51.3196C406.89 49.4054 407.891 47.3505 405.963 45.5642C405.357 45.0014 404.244 44.686 403.326 44.622C402.95 44.5964 402.491 45.5343 402.051 46.0161C401.666 46.4381 401.251 46.8432 400.543 47.5679C400.22 46.5234 400.049 45.9649 399.82 45.2103C396.978 46.1909 396.182 48.3225 395.225 50.3646C393.873 53.2509 392.686 56.2224 391.002 58.9552C390.108 60.4047 388.477 61.6496 386.881 62.6046C384.161 64.2331 383.809 64.8599 385.513 67.3837C385.03 67.5841 384.571 67.8015 384.088 67.9678C383.14 68.2961 381.744 68.3472 381.309 68.9484C379.62 71.2633 377.515 71.404 374.674 70.1165C375.621 67.8527 376.275 65.2393 377.755 63.0479C379.356 60.6776 378.663 58.7463 377.535 56.6445C377.403 56.4015 377.281 56.1585 377.349 56.2864C378.629 56.0689 379.874 55.7748 381.134 55.6853C381.71 55.6426 382.325 55.9965 382.916 56.1926C385.069 56.9088 387.188 55.6682 386.89 53.6985C386.544 51.3793 385.709 49.2392 382.969 48.0881C381.358 47.4102 379.928 46.5234 380.03 44.6007C380.054 44.153 379.395 43.343 378.927 43.262C375.621 42.7035 375.025 40.5037 374.752 38.1631C374.566 36.5729 373.966 35.9206 371.954 35.4474C367.681 34.437 363.614 32.77 359.425 31.457C358.624 31.2054 357.657 31.2864 356.768 31.3248C353.297 31.4612 350.777 32.5398 348.331 35.1149C345.562 38.0267 342.662 41.4672 337.579 41.9958C336.661 42.0896 335.553 42.6268 335.011 43.2663C333.609 44.929 332.237 44.7371 330.538 43.7225C329.801 43.2833 328.858 42.8826 327.999 42.8613C324.244 42.7675 320.484 42.7547 316.729 42.857C315.392 42.8954 314.073 43.3387 312.745 43.5988C312.691 43.8802 312.633 44.1616 312.579 44.443C309.518 42.8911 306.456 41.335 303.453 39.8087C304.356 37.1442 305.182 34.7141 306.007 32.284C306.158 32.4716 306.314 32.6592 306.466 32.8468C307.481 32.3395 308.878 32.0368 309.42 31.2694C310.069 30.357 310.353 29.1164 308.663 28.2211C306.944 27.3088 306.593 25.0449 307.794 23.0241C309.542 20.0782 311.485 17.2175 313.399 14.3441C313.717 13.8709 314.259 13.4914 314.762 13.1376C315.665 12.4938 317.271 11.9993 317.413 11.2702C317.706 9.73972 317.716 7.90652 316.988 6.54227C315.406 3.57075 313.282 0.816662 311.407 -2.03975C311.075 -2.54708 310.87 -3.1141 310.606 -3.65554L310.602 -3.62996Z"
            class="fill-nbgreenmain hover:fill-nbbluemain active:fill-nborangemain"
          />
          <path
            d="M-21.6979 107.305C-21.571 107.467 -21.6589 107.407 -21.6589 107.348C-21.6637 106.282 -21.3073 104.432 -21.7223 104.287C-23.1432 103.801 -24.8278 103.903 -26.4147 103.805C-26.7809 103.784 -27.152 103.869 -27.7135 103.929C-25.3795 101.605 -25.9069 99.222 -26.9127 96.7237C-24.9645 94.5622 -25.0915 93.2235 -27.7331 90.576C-25.5749 89.3269 -23.6999 87.9413 -20.7311 89.0583C-19.0368 89.6978 -16.9714 89.8811 -16.82 87.2677C-16.7956 86.8286 -16.0095 86.0186 -15.6872 86.0612C-13.3727 86.3554 -9.90596 86.172 -9.03194 87.3743C-6.98605 90.1838 -4.01731 89.9152 -1.22435 90.5888C2.40845 91.467 6.02172 92.1619 9.4055 93.9525C12.843 95.773 16.4807 97.3717 20.7482 98.0325C24.1369 98.5569 28.0041 98.6336 30.9582 100.791C31.3488 101.077 32.0129 101.26 32.5158 101.213C36.4611 100.851 40.0255 102.407 43.6876 103.157C46.1779 103.669 48.9464 105.395 47.4376 108.576C50.7628 109.744 54.005 110.605 55.8263 113.351C55.9434 113.525 56.1632 113.768 56.3487 113.777C59.8204 113.96 62.3692 117.047 66.1778 116.173C66.4073 116.122 66.7442 116.254 66.8956 116.151C71.1534 113.252 73.2041 117.392 76.1973 118.432C76.9248 118.684 77.2373 119.745 77.9453 120.163C79.4737 121.059 81.0996 121.839 82.7598 122.529C83.5166 122.845 84.6348 122.619 85.2744 123.02C88.2236 124.861 91.1338 124.03 94.083 123.152C95.1816 126.742 93.2334 130.51 89.8935 131.93C85.4355 133.823 80.8945 135.584 76.3145 137.246C74.9571 137.741 73.3506 137.792 71.8467 137.89C68.6582 138.095 67.0567 139.131 66.0655 141.727C65.9239 142.102 65.587 142.516 65.2061 142.708C60.0645 145.325 56.4708 149.371 52.8478 153.293C51.4269 154.832 51.1778 157.22 50.5089 159.249C50.2062 160.174 49.8204 161.266 50.1134 162.11C50.6798 163.726 51.6808 165.231 52.5499 166.761C52.755 167.119 53.1554 167.388 53.5509 167.784C53.17 168.095 52.9308 168.454 52.5987 168.53C48.38 169.541 45.8263 172.457 42.9845 175.002C42.2814 175.633 41.8566 176.69 41.7394 177.598C41.4513 179.824 40.714 180.51 38.1115 180.544C36.7394 180.561 35.2892 180.404 34.0099 180.728C31.7199 181.303 30.2404 182.723 29.6789 184.829C29.4543 185.665 29.2297 187.007 28.6584 187.169C27.2131 187.579 25.4406 187.822 24.0295 187.455C19.2492 186.214 14.5813 184.633 9.84007 183.273C6.60766 182.348 3.3313 181 -0.125719 182.279C-2.80637 183.269 -5.41867 184.437 -7.91866 185.741C-11.0437 187.374 -14.9987 187.6 -17.2399 185.993C-18.6852 184.957 -19.3444 183.699 -19.4128 181.972C-19.5153 179.415 -19.4958 176.656 -20.5895 174.367C-22.0837 171.238 -25.7018 170.005 -29.4127 169.285C-30.2965 165.047 -28.9245 161.863 -24.1003 160.004C-21.7663 159.104 -21.6198 157.834 -23.2165 156.056C-24.6325 154.479 -24.6227 152.952 -22.9967 151.554C-19.9352 148.915 -19.4079 146.024 -21.4196 142.678C-21.986 141.731 -22.0739 140.567 -22.3815 139.497C-17.0788 138.504 -16.0876 137.417 -15.9264 132.599C-15.9167 132.245 -16.0778 131.751 -15.8679 131.555C-13.2263 129.086 -13.5485 125.735 -12.3229 122.862C-11.8981 121.864 -10.3259 121.233 -9.25167 120.462C-8.08956 119.626 -6.6296 118.991 -5.78488 117.963C-4.16379 115.994 -7.28878 109.526 -9.99873 108.989C-10.8532 108.819 -11.781 108.917 -12.6696 108.921C-14.7204 108.921 -16.8786 109.603 -18.4313 107.54C-18.778 107.079 -20.4479 107.373 -21.7028 107.309L-21.6979 107.305Z"
            class="fill-nbgreenmain hover:fill-nbbluemain active:fill-nborangemain"
          />
          <path
            d="M199.444 20.9046C200.098 21.8894 200.733 22.9595 201.49 23.9571C202.096 24.7586 202.735 25.3427 202.476 26.5662C202.262 27.5979 202.877 28.911 203.526 29.9001C205.401 32.7523 207.921 35.1014 211.143 36.9005C212.75 37.8 214.21 38.9511 215.538 40.1576C216.114 40.6777 216.407 41.6284 216.378 42.3703C216.363 42.6857 215.181 42.9458 214.556 43.2698C214.053 43.5342 213.209 43.8326 213.179 44.1609C212.979 46.5398 210.748 47.0599 208.892 47.8998C205.684 49.3493 205.533 49.9206 207.325 52.551C208.282 53.9579 208.961 55.5183 209.688 57.0317C209.82 57.3046 209.595 57.7053 209.532 58.0464C209.137 57.9015 208.629 57.8418 208.37 57.5902C207.76 56.9934 207.349 55.838 206.705 55.7442C204.884 55.4842 202.198 54.9768 201.275 55.7911C199.41 57.4325 197.691 56.2558 196.016 56.5841C194.288 56.9209 192.764 58.072 190.567 59.1548C188.111 58.656 184.776 57.9824 181.627 57.3429C180.816 58.477 180.333 59.1549 179.698 60.0416C177.989 57.9313 175.904 57.0573 173.121 57.2364C172.135 57.3003 171.104 56.4946 170.05 56.2047C168.331 55.7314 166.578 55.352 164.425 54.8361C163.785 52.8622 162.726 52.0309 160.807 52.7045C159.19 53.2715 159.034 54.38 159.991 55.8551C157.374 56.6992 155.045 55.7613 152.56 55.4799C153.292 49.9333 154.503 44.7108 158.59 40.294C159.449 39.3646 159.737 38.0388 160.523 36.4187C155.787 35.3401 151.661 34.4917 147.618 33.4173C146.563 33.136 145.592 32.2705 144.874 31.4733C144.166 30.6846 143.829 29.6401 143.331 28.7107C145.328 26.5279 145.26 26.0802 143.292 23.8164C142.452 22.8529 141.935 21.6805 141.246 20.5593C144.303 19.5531 145.23 18.4404 144.044 16.1766C142.32 12.8896 142.965 9.91382 144.322 6.78456C145.411 4.26922 145.885 1.67714 143.756 -1.23896C145.597 -1.02153 146.778 -0.94479 147.926 -0.731625C150.401 -0.271191 151.378 -0.927742 151.632 -3.05513C151.725 -3.80973 152.203 -4.59843 152.73 -5.23366C153.341 -5.97121 154.278 -6.50414 154.913 -7.22889C155.362 -7.74049 155.543 -8.43114 155.846 -9.04505C155.191 -9.23263 154.542 -9.43728 153.878 -9.59929C153.375 -9.72292 152.848 -9.78687 152.14 -9.91476C156.163 -13.2828 158.468 -16.9364 157.096 -21.788C156.93 -22.3849 157.418 -23.553 157.97 -23.7918C159.84 -24.589 161.876 -25.0836 163.932 -25.7145C164.327 -24.6018 164.459 -23.8984 164.82 -23.3058C165.216 -22.6663 165.831 -22.1291 166.353 -21.5493C166.974 -22.1121 167.599 -22.6748 168.258 -23.2717C168.409 -23.0287 168.726 -22.5128 169.146 -21.8392C171.759 -22.7515 170.787 -24.8917 171.432 -27.0106C174.044 -25.7955 176.524 -24.6445 179.395 -23.31C179.347 -25.9959 177.838 -27.2578 175.904 -28.4217C175.099 -28.9077 174.444 -29.7774 174.083 -30.5917C172.804 -33.4652 172.081 -36.441 173.023 -39.9326C174.498 -39.5404 176.217 -39.0842 177.935 -38.6366C178.575 -38.4703 179.308 -38.0866 179.854 -38.2273C182.213 -38.837 182.662 -37.5452 182.818 -36.053C183.057 -33.7807 183.839 -33.1838 186.427 -33.3373C186.993 -33.3714 187.574 -32.9707 188.17 -32.8513C189.342 -32.6168 190.523 -32.442 192.139 -32.1692C191.622 -31.0437 190.875 -29.4193 190.098 -27.7268C191.734 -27.4966 193.219 -27.1214 194.693 -27.1427C195.597 -27.1555 196.544 -27.7098 197.374 -28.1531C198.013 -28.4985 198.565 -29.4875 199.058 -29.4406C201.964 -29.1635 203.741 -30.6983 205.489 -32.2544C207.154 -33.7423 208.448 -33.7679 210.43 -32.3951C212.012 -31.2995 213.126 -29.5387 215.738 -29.3682C216.802 -29.3 217.594 -27.2493 218.712 -26.2773C222.247 -23.2162 222.867 -19.8994 220.465 -16.0795C219.39 -14.3742 219.84 -12.6816 221.539 -11.36C222.823 -10.3624 224.088 -9.34348 223.443 -7.48895C223.262 -6.97309 224.102 -6.2398 224.219 -5.57047C224.449 -4.23606 224.468 -2.87181 224.635 -1.5246C224.747 -0.62505 224.864 0.291557 225.162 1.15274C225.992 3.57856 228.697 5.41603 228.218 8.23833C228.018 9.41074 227.491 10.5363 227.003 12.0114C224.698 9.34254 223.443 9.48322 221.192 11.5424C219.976 12.6551 218.16 13.2989 216.539 14.0322C214.742 14.8507 212.901 15.6181 211.011 16.2533C208.511 17.0975 205.899 17.7028 203.429 18.5981C202.193 19.0458 201.153 19.9027 199.464 20.9131L199.444 20.9046Z"
            class="fill-nbgreenmain hover:fill-nbbluemain active:fill-nborangemain"
          />
          <path
            d="M279.861 31.3368C278.855 30.3563 277.903 29.1583 276.648 28.2843C275.74 27.6533 274.388 27.0778 273.323 27.1801C272.381 27.2696 271.565 28.3312 270.393 29.1753C270.056 28.7277 269.588 27.6235 268.68 27.0053C266.043 25.2019 264.754 21.9107 260.472 21.8425C258.089 21.8041 257.098 20.0476 257.596 17.5408C255.999 17.8733 254.69 18.1505 253.24 18.4489C252.249 16.0103 249.939 16.9866 248.103 16.8416C247.005 18.0439 249.432 20.0263 246.941 20.5507C245.423 19.6128 244.051 18.7601 242.586 17.852C242.962 17.1912 243.479 16.4366 243.811 15.6266C243.992 15.1875 243.846 14.646 243.846 13.8403C242.928 13.9341 242.107 14.1046 241.292 14.0833C240.125 14.0534 238.953 13.9511 237.81 13.7465C237.034 13.6101 236.272 12.962 235.579 13.0388C233.914 13.2221 232.85 12.314 232.767 11.3334C232.615 9.51728 231.424 9.50022 229.695 9.53859C230.144 6.04269 228.352 3.19909 226.385 0.40237C226.136 0.0485153 225.799 -0.377823 225.843 -0.740204C226.141 -3.11486 225.706 -5.30192 225.071 -7.67231C224.378 -10.2601 223.602 -12.2596 220.73 -13.6793C221.482 -14.7366 222.688 -15.6788 222.762 -16.6807C222.942 -19.196 222.776 -21.754 222.42 -24.2608C222.21 -25.7444 222.591 -26.6099 224.124 -27.211C228.943 -29.0911 234.163 -30.4809 238.431 -33.0645C242.693 -35.6438 246.912 -37.9332 251.907 -39.0715C253.348 -39.3997 254.832 -39.5703 256.443 -39.8389C257.303 -38.5258 258.099 -37.17 259.046 -35.9038C260.281 -34.2454 265.545 -33.5548 267.171 -34.9148C269.07 -36.5092 271.346 -36.4325 273.66 -36.4368C275.955 -36.4453 278.25 -36.4538 280.54 -36.4368C281.912 -36.4282 283.289 -36.3515 284.661 -36.3515C286.472 -36.3515 288.294 -36.3046 290.095 -36.4495C292.718 -36.6584 295.315 -37.1445 297.942 -37.2894C301.331 -37.477 304.309 -34.6163 304.993 -31.6789C305.613 -29.0229 307.102 -26.5203 308.23 -23.9581C308.88 -22.483 309.807 -21.0633 310.139 -19.5371C310.271 -18.9232 309.314 -17.9 308.557 -17.4054C305.042 -15.0819 304.661 -14.4808 305.032 -10.695C308.816 -9.659 309.549 -8.89161 309.334 -5.96699C309.124 -3.09353 310.486 -0.608032 312.263 1.82631C314.27 4.57613 317.141 7.17247 315.945 10.856C310.169 14.1131 307.493 19.1268 305.94 24.6648C305.457 26.3871 305.877 28.263 307.849 29.5079C308.142 29.6912 308.206 30.4245 308.045 30.7869C307.952 30.9872 307.073 31.1322 306.712 30.9872C304.71 30.1942 302.854 29.0005 300.774 28.5102C297.473 27.7343 294.173 25.7178 290.545 28.1138C289.768 28.6254 287.84 28.587 287 28.0882C285.061 26.9286 283.899 27.5382 282.649 28.7788C281.853 29.5676 280.994 30.3051 279.871 31.3368H279.861Z"
            class="fill-nbgreenmain hover:fill-nbbluemain active:fill-nborangemain"
          />
          <path
            d="M241.418 185.523C245.036 184.556 244.27 182.19 244.358 180.075C244.372 179.678 244.548 179.235 244.812 178.911C247.898 175.147 245.998 171.425 244.558 167.792C243.733 165.712 242.234 163.849 241.233 161.811C240.378 160.072 239.421 159.389 237.59 160.894C237.375 161.069 237.024 161.116 237.053 161.108C235.984 160.553 234.968 160.208 234.241 159.598C233.42 158.916 232.419 158.055 232.263 157.168C231.794 154.508 230.515 153.353 227.273 152.577C224.397 151.886 221.706 149.635 219.68 147.52C217.869 145.632 215.901 144.796 213.376 144.762C209.939 144.715 207.141 143.381 204.802 141.471C200.505 137.966 196.443 134.24 192.283 130.608C188.489 127.295 184.69 123.987 180.911 120.662C180.588 120.38 180.09 119.916 180.173 119.664C181.375 116.006 177.864 113.111 178.142 109.496C178.328 107.07 175.496 105.651 173.352 104.397C171.057 103.054 168.504 102.04 166.028 100.94C162.312 99.2898 157.214 100.914 154.924 104.436C153.357 106.844 152.395 107.288 148.977 107.13C148.977 106.495 149.046 105.843 148.958 105.212C148.865 104.529 148.635 103.86 148.513 103.387C146.643 102.833 144.744 102.513 143.137 101.737C141.004 100.705 140.413 99.2046 141.687 97.2818C142.918 95.423 142.654 93.7177 140.691 92.5027C139.392 91.6969 139.798 91.1896 140.623 90.5714C144.968 87.3185 145.017 87.0883 143.02 82.4371C142.698 81.6825 142.771 80.7957 142.664 79.9686C143.762 80.0752 144.964 79.9686 145.935 80.331C147.757 81.0174 148.953 81.3968 151.223 80.3651C154.06 79.0776 155.852 77.7773 156.57 75.1127C156.741 74.4775 157.693 74 158.24 73.4884C159.993 75.2406 161.687 76.7839 163.171 78.4679C164.29 79.7341 165.774 79.9089 166.697 78.5233C167.795 76.8692 168.674 75.0999 169.763 73.1686C169.924 73.2241 170.51 73.2923 170.828 73.5822C171.34 74.0469 171.594 75.0573 172.097 75.134C173.518 75.3515 175.237 75.5987 176.399 75.0829C177.249 74.7034 177.41 73.1388 177.903 72.0431C178.767 72.1156 179.915 72.2052 181.184 72.3117C181.653 70.5467 182.078 68.948 182.502 67.345C184.67 68.6666 186.76 68.9608 189.241 67.669C190.754 66.8803 192.703 66.6884 194.485 66.3389C196.335 65.9722 198.215 65.7377 200.256 65.418C200.515 69.4681 204.26 70.3037 208.074 70.9475C209.875 71.2544 211.741 71.2416 213.577 71.4164C214.329 71.4889 215.061 71.6893 215.793 71.8257C214.665 72.883 213.279 73.7016 212.737 74.8271C212.078 76.1913 212.693 77.4874 214.827 77.4405C214.685 78.9966 214.553 80.4248 214.392 82.1514C210.554 80.915 208.704 84.1807 205.671 84.9183C204.226 85.2679 202.825 85.7923 201.453 86.3294C198.645 87.4251 198.352 88.2138 199.91 90.4989C200.354 91.1512 201.077 91.6586 201.575 92.2895C202.283 93.1976 202.864 94.1654 201.443 95.0095C199.973 95.8792 199.68 97.1326 199.915 98.5395C200.232 100.467 200.1 102.615 201.072 104.252C202.146 106.06 204.065 107.612 205.955 108.891C208.005 110.281 210.793 110.916 212.615 112.459C214.48 114.041 215.852 116.215 216.921 118.33C218 120.457 218.479 122.823 219.163 125.1C220.115 128.284 223.533 129.423 225.969 131.358C227.312 132.424 228.874 133.341 230.491 134.07C232.121 134.803 233.894 135.383 235.681 135.745C238.103 136.236 239.612 137.399 241.018 139.194C242.219 140.729 244.153 142.042 246.091 142.882C252.576 145.687 259.333 148.019 265.71 150.982C268.347 152.21 270.481 154.44 272.439 156.508C273.127 157.237 272.717 158.852 272.536 160.033C272.507 160.238 270.661 160.609 270.422 160.353C267.59 157.347 263.806 155.497 260.071 153.574C258.484 152.756 255.344 153.225 254.304 154.598C251.999 157.637 250.046 160.788 250.183 164.621C250.232 165.938 250.779 166.496 252.273 166.987C254.602 167.75 257.029 168.675 257.795 171.173C258.406 173.151 257.605 174.494 255.364 174.997C251.662 175.833 251.003 176.728 251.633 180.092C252.014 182.117 250.5 184.351 248.274 185.012C246.921 185.413 245.564 185.83 244.177 186.125C243.479 186.27 242.703 186.15 241.96 186.15C241.785 185.946 241.604 185.741 241.428 185.541L241.418 185.523Z"
            class="fill-nbgreenmain hover:fill-nbbluemain active:fill-nborangemain"
          />
          <path
            d="M386.503 68.4073C386.903 69.7716 387.25 70.5603 387.357 71.3746C387.587 73.1439 387.557 74.8151 385.453 75.9448C384.242 76.5971 383.133 77.4839 382.22 78.4431C381.483 79.2148 380.756 80.2209 380.643 81.1802C380.297 84.0579 380.243 86.9655 380.101 89.8602C380.057 90.7044 380.096 91.5528 380.096 92.3713C377.172 93.6801 374.994 91.5783 372.469 91.3012C368.798 90.9005 365.277 89.5064 361.405 90.5893C357.894 91.5698 355.038 93.4798 353.417 96.0633C351.415 99.2523 348.124 99.2949 344.984 99.9045C343.807 100.135 342.46 99.6061 341.19 99.6146C339.935 99.6232 338.676 99.8491 337.431 100.024C335.717 100.263 333.876 101.034 332.323 100.715C328.197 99.8704 324.218 99.3972 319.721 101.618C320.326 100.45 320.717 99.9344 320.858 99.3759C321.166 98.1907 321.146 97.1377 319.267 96.9501C317.011 96.7241 315.404 95.9354 315.37 93.5863C315.36 92.8445 314.672 92.0644 314.154 91.3865C313.275 90.2311 312.216 89.9967 311.513 91.4718C310.795 92.9852 309.828 92.7635 308.48 92.1923C306.654 91.4206 304.73 90.8109 302.494 90.0009C302.494 89.5106 302.362 88.5855 302.519 87.6987C302.968 85.1365 302.631 84.2583 299.828 83.4994C296.879 82.7064 294.384 81.9262 294.501 78.571C294.53 77.8122 293.354 76.9424 292.577 76.2603C291.474 75.2925 290.229 74.4527 288.715 73.3058C291.576 72.5555 294.35 72.3509 296.337 71.1486C297.909 70.1936 298.734 68.0961 299.506 66.3695C301.581 61.731 303.339 56.9817 305.487 52.3731C306.015 51.2433 307.543 50.4717 308.622 49.5423C309.74 48.5745 311.063 47.7346 311.957 46.6304C313.915 44.2089 315.907 43.6333 319.335 44.0341C322.05 44.3496 324.857 44.0383 327.621 44.0767C328.143 44.0852 328.72 44.3496 329.169 44.6224C332.191 46.4599 333.944 46.2339 336.293 43.9019C336.859 43.3434 337.909 42.964 338.788 42.8702C342.084 42.5164 344.725 41.4121 346.376 38.7476C347.25 37.3407 348.593 36.633 350.243 37.8864C351.615 38.9267 353.114 39.9669 354.066 41.28C357.211 45.6285 361.732 48.8132 365.834 52.3646C368.524 54.6966 369.125 57.7662 368.49 60.8229C367.406 66.0497 370.477 71.0463 376.439 72.1334C378.553 72.5171 380.331 72.159 381.942 70.5475C382.982 69.5073 384.896 69.1321 386.512 68.4116L386.503 68.4073Z"
            class="fill-nbgreenmain hover:fill-nbbluemain active:fill-nborangemain"
          />
          <path
            d="M480.372 185.89C479.874 183.285 478.839 181.004 479.225 178.924C479.586 176.98 479.42 175.334 478.707 173.607C478.39 172.831 477.95 172.094 477.574 171.348C481.593 170.84 481.656 170.772 481.666 167.212C481.666 167.008 481.666 166.697 481.808 166.616C484.322 165.153 483.36 163.401 482.701 161.427C481.988 159.295 483.038 158.345 485.518 158.383C488.844 158.439 491.329 157.117 493.155 154.849C495.103 152.427 496.842 150.453 501.051 151.413C504.43 152.184 506.91 149.622 509.088 147.721C511.925 145.239 514.322 142.374 516.939 139.701C517.54 139.087 518.199 138.491 518.946 138.026C522.066 136.082 525.221 134.176 528.399 132.305C528.878 132.023 529.547 131.993 530.85 131.665C530.011 134.087 529.947 136.5 528.546 137.881C524.2 142.166 523.829 146.463 526.466 151.545C527.603 153.74 527.52 156.418 528.023 158.869C529.22 164.671 526.275 169.382 522.691 173.855C519.171 178.242 515.343 182.441 511.832 186.836C506.925 192.984 502.281 199.294 497.296 205.386C496.231 206.686 494.073 207.266 492.608 208.37C490.811 209.73 489.102 209.85 487.13 208.771C486.769 208.575 486.173 208.733 485.694 208.669C484.395 208.494 482.125 208.524 481.974 208.05C481.441 206.375 480.528 204.538 482.242 202.751C483.033 201.928 483.126 200.607 483.59 199.528C484.298 197.874 484.693 196.002 485.865 194.642C488.194 191.94 487.735 188.989 487.198 186.15C486.788 183.997 484.405 184.828 482.755 184.965C482.022 185.024 481.339 185.498 480.367 185.89H480.372Z"
            class="fill-nbgreenmain hover:fill-nbbluemain active:fill-nborangemain"
          />
          <path
            d="M379.737 94.2582C379.015 95.1407 378.453 95.8867 377.823 96.5902C375.23 99.4807 374.088 102.614 375.06 106.34C375.294 107.231 374.571 108.498 373.883 109.346C372.164 111.469 372.223 112.416 374.522 114.006C375.743 114.85 376.881 115.788 377.945 116.598C375.768 118.329 373.634 118.508 371.231 117.109C370.768 116.837 369.513 117.459 368.702 117.813C367.789 118.209 366.993 119.126 366.095 119.19C363.59 119.36 363.546 121.569 362.062 122.532C361.856 122.664 361.891 123.227 361.744 123.249C357.018 123.986 359.894 127.111 359.151 128.872C357.74 129.571 356.441 130.483 354.957 130.884C353.316 131.327 351.49 131.545 349.786 131.417C347.105 131.221 344.425 130.215 341.803 130.36C338.858 130.517 335.939 131.46 333.082 132.265C330.768 132.918 328.561 133.873 325.88 134.849C325.88 133.728 325.919 133.046 325.875 132.368C325.694 129.626 324.933 127.311 321.686 125.917C319.674 125.052 317.486 123.884 318.463 121.079C318.834 120.021 317.955 118.674 317.97 117.459C317.975 116.871 318.57 116.009 319.166 115.754C321.481 114.773 323.063 113.494 322.428 111.06C322.257 110.416 321.754 109.777 321.236 109.273C319.274 107.372 317.169 105.577 315.284 103.62C314.889 103.207 314.967 102.218 315.211 101.608C315.734 100.299 316.5 99.0629 317.203 97.7242C317.672 97.882 318.556 98.1761 319.337 98.4405C319 99.5702 318.673 100.666 318.121 102.503C320.494 101.996 322.179 101.553 323.898 101.297C325.104 101.118 326.393 101.003 327.589 101.177C331.49 101.749 335.304 102.081 339.234 101.045C340.802 100.632 342.716 101.339 344.435 101.203C348.194 100.905 351.676 100.402 354.308 97.2851C357.047 94.0365 360.46 90.7793 365.855 91.5126C368.844 91.9219 372.003 91.9048 374.786 93.4908C375.992 94.1814 377.852 93.9981 379.752 94.2624L379.737 94.2582Z"
            class="fill-nbgreenmain hover:fill-nbbluemain active:fill-nborangemain"
          />
          <path
            d="M247.903 54.8141C250.97 54.3707 252.597 52.86 252.786 50.2822C253.782 50.7128 254.759 50.9131 255.35 51.4375C257.029 52.9297 258.87 53.7397 261.351 53.5138C263.958 53.2793 266.736 54.0083 269.085 52.4778C269.734 52.0557 270.145 51.3651 270.696 50.8236C271.404 50.1202 272.039 49.3229 272.889 48.7772C274.3 47.8734 275.799 47.0378 277.366 46.3685C278.133 46.0402 279.188 45.9549 280.032 46.0999C282.454 46.5092 285.311 45.2813 286.365 43.2264C287.249 41.5083 287.923 40.3444 290.955 40.4851C294.437 40.6471 297.791 41.4017 301.219 41.4785C303.02 41.5169 304.197 41.5296 305.545 42.9621C306.57 44.0535 308.924 44.1899 311.272 44.936C310.145 46.1425 309.402 47.72 308.162 48.1164C304.749 49.2121 304.129 51.6166 303.216 54.1746C302.063 57.4019 300.501 60.5269 299.026 63.6604C298.152 65.5107 297.132 67.314 296.121 69.1132C295.848 69.5992 295.33 70.3879 294.974 70.3708C291.546 70.1747 289.036 73.0524 285.359 72.3149C282.278 71.6967 279.393 72.5323 276.858 74.3655C275.74 75.1755 274.153 75.4655 272.855 76.1092C271.727 76.6677 270.706 77.3925 269.637 78.0405C269.183 78.3176 268.758 78.6672 268.255 78.8462C264.061 80.3469 257.381 78.5904 254.505 75.5166C253.016 73.9264 251.258 72.3831 249.266 71.3386C246.888 70.098 246.434 68.09 245.56 66.2013C245.389 65.8347 245.477 65.0758 245.76 64.9095C247.698 63.7712 247.152 62.0702 247.318 60.4928C247.405 59.6529 248.069 58.8557 248.157 58.0158C248.26 57.0395 248.021 56.0376 247.908 54.8183L247.903 54.8141Z"
            class="fill-nbgreenmain hover:fill-nbbluemain active:fill-nborangemain"
          />
          <path
            d="M201.192 63.7931C197.213 64.5179 193.478 65.1616 189.767 65.8992C189.029 66.0484 188.419 66.7646 187.687 66.8584C186.549 67.0076 184.942 67.2592 184.278 66.739C182.574 65.4132 180.812 65.9461 179.01 65.9759C178.277 65.9887 177.311 66.0996 176.842 65.7585C174.405 63.9935 172.052 62.1134 173.38 58.6686C175.065 58.3915 176.476 58.9159 177.687 60.2333C179.039 61.7084 180.66 61.5634 181.822 59.9732C183.063 58.2764 185.108 58.1187 186.593 59.6065C187.926 60.941 192.247 60.4677 193.663 59.2271C194.537 58.464 196.173 58.0547 197.472 58.0419C199.195 58.0249 200.606 58.2508 202.076 56.9036C202.701 56.3323 204.923 56.9335 206.339 57.2703C206.822 57.3854 207.061 58.302 207.525 59.0267C208.175 59.0267 208.98 59.0566 209.781 59.0225C211.969 58.9287 212.408 58.0206 211.314 56.3323C210.064 54.4053 208.995 52.3888 207.686 50.1378C208.912 49.5409 210.123 48.9952 211.28 48.3642C212.081 47.9294 213.067 47.5159 213.497 46.8593C214.312 45.6144 214.684 44.2246 216.91 44.263C217.35 44.2715 217.823 42.8006 218.307 41.965C220.045 44.0199 222.501 44.4719 225.416 43.6917C228.404 42.8944 229.513 40.7543 230.743 38.0215C233.277 38.8145 235.914 39.454 238.35 40.4601C240.763 41.462 242.891 41.803 245.206 40.3194C246.529 39.4753 249.268 40.588 249.112 42.0759C248.775 45.3288 250.157 48.0573 251.578 50.8668C251.847 51.3954 251.617 52.1202 251.617 52.8535C250.616 53.0624 249.6 53.5058 248.639 53.4376C246.246 53.267 246.309 54.465 246.285 55.97C246.246 58.2892 246.778 61.039 245.557 62.8125C243.99 65.0891 241.158 66.9309 238.429 68.2909C236.407 69.297 233.634 69.0924 231.29 69.6978C229.669 70.1198 228.028 70.819 226.725 71.7484C225.553 72.584 224.703 72.6053 223.282 72.3197C218.258 71.3093 213.165 70.576 208.111 69.6679C205.904 69.2714 203.678 68.6916 202.423 66.9011C201.764 65.9589 201.568 64.7694 201.197 63.7888L201.192 63.7931Z"
            class="fill-nbgreenmain hover:fill-nbbluemain active:fill-nborangemain"
          />
          <path
            d="M332.802 162.293C331.913 162.485 331.762 162.54 331.61 162.544C329.979 162.557 328.349 162.566 326.718 162.574C326.737 164.075 326.361 165.695 326.879 167.051C327.558 168.85 328.402 170.508 331.122 171.322C334.603 172.367 337.802 174.268 340.912 176.08C342.982 177.291 342.05 179.124 341.356 180.957C338.456 178.301 335.39 178.28 331.825 180.365C332.279 177.849 330.785 177.031 328.661 176.315C326.64 175.633 324.867 175.304 322.665 175.782C318.978 176.583 315.184 177.039 311.41 177.496C310.751 177.577 309.901 177.027 309.271 176.617C308.124 175.863 307.177 174.857 305.966 174.217C304.867 173.637 304.77 173.181 305.258 172.196C306.561 169.557 305.927 168.027 302.733 167.524C299.369 166.995 296.84 165.814 295.434 163.414C296.283 161.645 296.937 159.901 297.924 158.311C298.949 156.661 300.351 155.19 301.474 153.579C302.309 152.381 303.007 151.102 303.666 149.823C304.018 149.14 304.35 148.377 304.369 147.644C304.423 145.086 305.009 143.978 307.851 144.007C310.731 144.037 311.786 142.464 313.349 141.04C314.12 140.337 315.36 139.923 316.478 139.642C318.143 139.224 319.892 139.058 321.596 138.751C321.967 138.683 322.562 138.542 322.626 138.333C323.495 135.464 326.43 135.941 328.744 135.276C332.113 134.313 335.287 132.701 338.71 132.045C341.317 131.542 344.193 132.096 346.952 132.173C349.545 132.241 352.172 132.535 354.725 132.279C356.591 132.092 358.466 131.333 360.126 130.501C360.687 130.22 360.702 128.954 360.78 128.122C360.883 127.01 360.804 125.884 360.804 124.469C362.011 124.946 362.714 125.249 363.436 125.509C365.38 126.2 365.946 127.662 364.545 129.026C362.987 130.544 362.328 132.198 362.479 134.215C362.616 135.975 361.854 136.994 359.525 136.649C357.089 136.287 354.628 136.018 352.167 135.822C350.722 135.707 349.179 135.4 348.153 136.901C347.743 137.502 346.478 138.333 346.107 138.175C342.65 136.67 341.469 139.808 339.193 140.622C338.978 140.699 338.847 140.934 338.637 141.032C337.494 141.565 335.468 141.974 335.365 142.618C335.145 144.042 335.726 145.627 336.288 147.056C336.766 148.275 337.67 149.371 338.505 150.705C336.918 150.517 335.536 150.355 333.998 150.176C333.793 150.837 333.622 151.396 333.329 152.355C332.47 151.69 331.786 151.276 331.273 150.743C329.76 149.166 328.217 147.597 326.869 145.917C325.736 144.502 324.672 145.321 323.851 145.943C322.045 147.311 321.449 151.2 322.435 153.233C324.403 157.296 327.553 160.361 332.797 162.301L332.802 162.293Z"
            class="fill-nbgreenmain hover:fill-nbbluemain active:fill-nborangemain"
          />
          <path
            d="M200.969 21.3854C204.353 20.1618 207.561 19.1045 210.666 17.8511C214.03 16.4996 217.311 14.9904 220.593 13.494C221.354 13.1444 222.204 12.6712 222.609 12.053C223.264 11.0554 223.815 11.0725 224.626 11.7844C226.057 13.0336 227.409 13.0805 228.737 11.6437C229.914 10.3733 231.105 10.5182 231.559 12.1511C231.945 13.5452 232.692 13.9886 234.225 13.8607C234.831 13.8095 235.563 13.8735 236.066 14.1378C239.138 15.745 239.333 15.809 242.038 15.2974C241.594 16.4996 241.125 17.7573 240.861 18.4821C242.536 19.6374 243.635 20.5583 244.909 21.2234C245.72 21.6497 246.97 22.076 247.697 21.816C248.552 21.5048 249.221 20.5157 249.65 19.6928C249.89 19.2367 249.474 18.5205 249.284 17.5783C251.545 18.2263 252.966 21.509 255.803 19.0789C256.325 21.8757 257.165 22.5194 260.285 22.8178C261.042 22.8903 262.009 23.0907 262.443 23.5511C263.849 25.039 265.055 26.6761 266.34 28.2535C266.681 28.0489 267.018 27.8485 267.36 27.6439C266.921 27.8741 266.515 28.1683 266.047 28.326C263.884 29.0593 262.292 30.0399 261.852 32.3378C261.266 35.4031 257.053 38.0421 253.493 38.187C252.233 38.2382 250.998 38.8223 249.846 39.4703C247.59 39.0056 245.295 38.5324 242.858 39.7474C242.204 40.0714 240.988 39.6365 240.065 39.4234C237.097 38.7413 234.162 37.9227 231.169 37.3472C230.524 37.2235 229.455 37.7522 228.967 38.2595C227.829 39.4362 226.989 40.826 225.91 42.0453C224.816 43.2816 222.219 43.0728 220.5 41.8449C216.696 39.1335 212.663 36.6522 209.06 33.7574C207.121 32.2013 205.69 30.0782 204.396 28.0361C203.864 27.1962 204.636 25.768 204.191 24.8344C203.679 23.7558 202.473 22.9244 200.983 21.3769L200.969 21.3854Z"
            class="fill-nbgreenmain hover:fill-nbbluemain active:fill-nborangemain"
          />
          <path
            d="M313.034 92.05C314.006 94.2754 314.919 96.0873 315.534 97.9717C315.695 98.4662 314.997 99.2251 314.577 99.8006C312.731 102.329 313.137 105.104 315.749 107.044C317.302 108.199 318.913 109.291 320.505 110.403C321.955 111.422 321.486 113.081 319.47 114.036C316.223 115.575 316.13 115.762 316.974 118.917C317.678 121.539 317.101 122.443 314.108 123.206C312.272 123.675 310.412 124.054 308.107 124.575C308.767 123.232 309.196 122.503 309.484 121.735C310.407 119.25 309.836 118.363 307.243 117.101C305.91 116.453 304.68 115.49 303.718 114.445C301.994 112.573 299.851 112.019 297.277 112.343C296.081 112.492 295.598 113.047 295.568 114.198C295.505 117.012 294.689 117.382 291.94 116.091C288.137 114.309 284.323 112.539 280.061 110.553C281.442 110.028 282.141 109.764 283.244 109.342C282.697 107.739 282.145 106.127 281.721 104.878C282.521 104.098 283.566 103.518 283.811 102.742C284.235 101.378 283.439 100.321 281.77 99.9157C281.618 99.8774 281.501 99.7537 281.359 99.6898C279.25 98.7632 278.524 97.3236 279.182 95.3711C279.489 94.4417 279.787 93.5037 279.973 92.553C280.246 91.1419 279.626 90.3319 277.668 90.5877C278.044 89.8245 278.176 89.0528 278.684 88.6223C280.578 87.0065 279.055 85.314 277.951 84.9431C274.733 83.8687 275.28 81.4514 274.641 79.4391C274.411 78.7229 274.406 77.9555 274.328 77.4013C275.764 76.5913 277.053 75.6192 278.552 75.0778C280.48 74.3786 282.556 73.9651 284.602 73.543C287.087 73.0314 287.995 74.8987 289.553 75.9859C291.921 77.6443 293.474 79.4562 294.094 82.0952C294.284 82.8967 295.827 83.5788 296.901 84.0733C298.342 84.7384 299.924 85.1647 301.364 85.6678C301.213 86.8018 301.091 87.6119 301.003 88.4262C300.783 90.4811 300.72 92.2759 304.211 91.9562C305.29 91.8581 306.555 92.6937 307.624 93.2607C309.714 94.3734 311.486 94.399 313.049 92.0457L313.034 92.05Z"
            class="fill-nbgreenmain hover:fill-nbbluemain active:fill-nborangemain"
          />
          <path
            d="M276.592 99.1323C278.653 100.019 280.108 100.607 281.519 101.264C282.637 101.784 282.95 102.863 281.748 103.161C278.643 103.933 280.425 105.472 280.757 106.772C280.913 107.395 281.324 107.966 281.729 108.789C278.858 108.989 277.29 110.14 276.783 112.336C276.714 112.63 276.411 112.979 276.109 113.124C273.409 114.412 271.724 117.976 272.266 120.768C272.403 121.485 271.831 122.435 271.27 123.066C270.992 123.378 269.839 123.442 269.356 123.199C266.739 121.89 264.126 120.538 261.69 118.995C260.913 118.505 260.43 117.418 260.22 116.526C259.483 113.419 256.499 111.978 254.18 110.046C251.958 108.2 249.571 106.495 247.491 104.538C246.343 103.455 245.689 101.976 244.8 100.68C243.746 99.145 242.496 97.687 241.665 96.0627C240.879 94.5236 240.201 92.8311 240.079 91.1727C239.981 89.8084 241.553 89.8894 242.315 90.6099C244.151 92.3536 245.298 92.3366 247.554 90.6824C250.176 88.7639 253.662 88.4868 257.159 89.9278C258.448 90.4607 260.279 90.1921 261.822 90.0173C266.079 89.5271 270.264 89.2883 274.19 91.258C274.698 91.5138 275.303 91.663 275.889 91.7525C276.69 91.8761 278.159 91.7653 278.218 91.9827C278.462 92.8908 278.467 93.9225 278.218 94.8391C277.832 96.2716 277.173 97.6486 276.597 99.128L276.592 99.1323Z"
            class="fill-nbgreenmain hover:fill-nbbluemain active:fill-nborangemain"
          />
          <path
            d="M245.16 90.3494C243.666 89.8335 242.372 89.2324 240.99 88.9467C239.452 88.627 238.451 90.3963 238.612 92.2039C238.822 94.5999 239.906 96.5056 241.625 98.3302C242.538 99.298 242.934 100.662 243.456 101.886C244.95 105.373 248.495 107.258 251.381 109.645C253.158 111.116 254.584 112.877 257.069 113.768C258.026 114.113 258.265 115.976 258.944 117.374C256.019 115.793 253.334 114.177 250.473 112.864C249.14 112.25 247.309 111.73 245.966 112.041C244.34 112.416 243.476 112.024 242.704 111.082C241.576 109.705 239.931 109.001 238.451 108.034C234.442 105.403 231.508 101.946 230.585 97.371C230.272 95.8277 229.193 94.3398 228.202 92.9755C227.309 91.7435 226.083 90.6904 224.936 89.6118C224.447 89.1556 223.651 88.4351 223.236 88.546C222.543 88.725 221.82 89.3859 221.508 89.9998C220.692 91.5985 220.092 93.2825 219.223 95.3758C217.665 92.9841 216.449 91.121 214.887 88.7293C215.243 87.7999 216.42 87.1945 218.617 87.0624C221.186 86.9089 223.69 85.9496 226.625 85.2462C227.953 86.6573 230.375 87.2371 233.192 87.2116C234.979 87.1945 235.829 86.7341 235.546 85.1353C235.292 83.6943 235.331 82.6285 237.265 81.8228C238.324 81.3837 239.467 80.143 238.685 78.4505C237.982 76.9285 239.159 75.8627 240.731 75.1123C242.704 74.1659 244.608 73.1086 246.537 72.0982C246.474 71.8978 246.405 71.6974 246.342 71.4971C246.859 71.7188 247.47 71.8552 247.885 72.1792C250.053 73.8675 252.269 75.5174 254.276 77.3463C256.6 79.4609 259.413 80.305 262.655 80.3434C263.549 80.3562 264.457 80.2624 265.336 80.3605C268.207 80.6802 270.468 79.8148 272.079 77.5552C272.323 77.6106 272.567 77.6703 272.811 77.7257C273.251 79.6186 273.558 81.5499 274.183 83.3959C274.447 84.1761 275.36 84.7986 276.005 85.4764C276.488 85.9838 277.528 86.5636 277.435 86.9345C277.138 88.0728 276.434 89.1343 275.829 90.2001C275.765 90.311 275.204 90.3536 275.038 90.2428C271.498 87.9236 267.103 88.3115 263.431 88.708C259.804 89.1002 256.664 88.1708 253.3 88.0301C250.141 87.8937 247.333 88.7293 245.165 90.3494H245.16Z"
            class="fill-nbgreenmain hover:fill-nbbluemain active:fill-nborangemain"
          />
          <path
            d="M284.925 28.5861C287.528 29.9418 289.667 30.091 291.859 28.8803C293.48 27.985 298.084 28.5392 299.994 29.7969C300.565 30.172 301.151 30.739 301.786 30.803C304.881 31.1142 304.388 32.9005 303.866 34.5888C303.25 36.5712 302.43 38.5068 301.615 40.6811C299.803 40.0544 297.938 39.3722 296.039 38.7839C295.584 38.6432 294.999 38.8095 294.481 38.8734C293.109 39.0439 291.722 39.4575 290.379 39.368C287.972 39.2102 286.336 39.5982 285.311 41.8236C284.281 44.0619 281.981 44.7397 279.154 44.599C278.182 44.5521 277.123 45.1234 276.175 45.5369C274.789 46.1381 273.436 46.8159 272.118 47.5322C271.219 48.0182 270.106 48.4658 269.608 49.1991C266.83 53.3004 261.039 54.0209 257.04 50.7765C255.917 49.8642 254.339 49.3739 252.753 48.9263C250.785 45.8354 249.066 42.4844 252.435 39.0653C255.858 39.9051 260.619 38.0165 262.079 35.2283C262.63 34.1753 262.762 32.875 263.548 32.0138C264.662 30.7987 266.205 29.8907 267.201 29.1318C269.081 30.0271 270.336 30.624 271.258 31.0631C272.323 29.8821 272.909 28.633 273.724 28.5051C274.461 28.3857 275.511 29.4388 276.317 30.0783C276.898 30.5387 277.176 31.3359 277.806 31.6898C279.046 32.3847 280.394 33.2245 281.761 31.7111C282.738 30.6325 283.851 29.6476 284.935 28.5903L284.925 28.5861Z"
            class="fill-nbgreenmain hover:fill-nbbluemain active:fill-nborangemain"
          />
          <path
            d="M509.345 82.5472C510.062 77.0561 507.65 73.3385 503.734 70.5887C501.054 68.7086 498.109 66.837 494.096 67.0288C492.055 67.1269 489.945 66.1677 487.87 65.6859C487.846 65.3022 487.821 64.9185 487.797 64.5348C489.555 63.9806 491.264 63.162 493.075 62.9318C495.307 62.6505 497.621 62.8125 499.892 62.8764C502.645 62.9574 505.106 62.6845 507.631 61.2904C509.159 60.4463 511.684 60.7575 513.72 60.9195C515.253 61.0389 516.879 61.5334 518.192 62.2454C520.311 63.3965 521.825 62.5055 523.427 61.542C525.131 60.5188 526.747 59.3762 528.515 58.4426C530.526 57.3767 533.49 58.4596 535.263 59.8281C536.796 61.0091 539.096 61.4354 541.054 62.1943C541.21 62.0067 541.366 61.8191 541.522 61.6358C541.586 62.1729 541.732 62.7101 541.688 63.2388C541.561 64.8844 542.347 65.8138 544.183 66.3339C546.244 66.918 546.708 68.2013 545.922 69.2628C543.554 69.2628 541.478 69.1861 539.413 69.2841C537.24 69.3907 535.599 70.0686 534.618 72.0894C533.949 73.4664 532.479 74.6218 531.141 75.6492C529.354 77.022 527.406 78.2541 525.399 79.3753C524.706 79.7633 523.607 79.8102 522.743 79.7036C521.503 79.5459 520.321 78.8936 519.091 78.8382C517.816 78.7828 516.4 78.9746 515.253 79.4436C513.383 80.211 511.679 81.2938 509.34 82.543L509.345 82.5472Z"
            class="fill-nbgreenmain hover:fill-nbbluemain active:fill-nborangemain"
          />
          <path
            d="M161.007 54.0146H162.638C162.501 54.8204 162.384 55.5409 162.227 56.466C165.699 56.3722 169.054 56.1761 171.934 58.9516C171.5 59.672 170.88 60.8189 170.138 61.9017C169.01 63.5516 169.776 64.8221 171.939 65.0395C172.911 65.1376 174.117 65.3849 174.727 65.9604C176.392 67.525 178.028 68.5013 180.977 66.7491C180.68 68.4416 180.47 69.6481 180.235 70.9868H176.095C176.026 71.9461 175.968 72.7689 175.899 73.7324C175.079 73.9242 174.205 74.1246 173.15 74.3719C172.252 72.6538 171.153 71.0849 168.614 71.9333C167.452 73.9839 166.305 76.0132 165.055 78.2131C163.038 76.0772 161.148 74.0734 158.839 71.6263C157.701 72.6111 155.929 73.5917 155.103 74.9943C154.137 76.6485 153.507 78.2344 151.197 78.8313C149.337 79.3088 147.594 80.0591 145.792 78.7247C145.494 78.503 144.884 78.6096 144.41 78.5627C143.731 76.3671 143.219 74.2184 142.389 72.1635C141.612 70.2322 140.382 70.1043 138.59 71.4174C137.11 72.5003 135.533 73.4808 133.995 74.504C133.775 74.325 133.556 74.1417 133.336 73.9626C135.099 71.6818 137.579 69.5842 138.419 67.0689C139.239 64.6004 141.29 63.8074 143.009 62.3878C143.805 61.727 144.098 60.627 144.762 59.817C145.265 59.2031 145.89 58.5167 146.646 58.2353C147.867 57.7834 149.225 57.4636 150.548 57.3954C153.145 57.2633 155.763 57.34 158.37 57.3315C161.49 57.323 161.7 57.0757 161.017 54.0146H161.007Z"
            class="fill-nbgreenmain hover:fill-nbbluemain active:fill-nborangemain"
          />
          <path
            d="M139.875 11.4441C140.065 11.0093 140.261 10.5744 140.446 10.1353C141.213 8.32763 141.086 6.79712 139.006 5.60766C137.409 4.69531 135.949 3.58686 134.47 2.52104C132.951 1.42537 128.571 1.68117 126.579 3.02837C123.884 4.85306 122.839 4.90422 120.388 3.48028C121.105 3.08379 121.916 2.63613 122.727 2.18849C121.652 1.54047 120.573 0.89245 119.504 0.248693C121.545 -2.14301 124.797 0.039793 127.541 -0.855497C127.565 -1.13261 127.766 -1.58026 127.59 -1.78489C125.07 -4.70098 128.146 -6.08657 129.68 -7.96241C130.632 -9.12629 131.374 -10.4479 132.038 -11.7653C133.151 -13.9822 133.85 -16.3952 135.227 -18.4714C137.092 -21.2809 140.588 -21.9162 143.962 -22.3766C146.174 -22.6793 148.439 -22.6409 150.671 -22.8285C153.034 -23.0246 156.042 -20.6372 155.959 -18.5737C155.856 -16.0456 154.387 -14.1016 152.487 -12.3451C150.148 -10.1836 150.363 -9.15613 153.703 -7.87714C152.565 -7.11401 151.218 -6.59815 150.622 -5.70286C150.031 -4.8161 150.202 -3.54564 149.973 -1.9938C148.986 -2.07054 147.712 -2.2368 146.433 -2.25386C145.339 -2.26665 143.688 -2.44997 143.283 -1.9469C142.756 -1.28609 143.156 -0.0241528 143.264 0.973457C143.337 1.65558 143.845 2.36755 143.703 2.98999C143.122 5.56075 142.419 8.11448 141.638 10.6469C141.496 11.0988 140.764 11.4057 140.305 11.7809L139.875 11.4356V11.4441Z"
            class="fill-nbgreenmain hover:fill-nbbluemain active:fill-nborangemain"
          />
          <path
            d="M350.23 35.494C351.944 32.8593 356.612 31.9981 359.937 33.4221C362.286 34.4282 365.113 34.5689 367.701 35.1743C369.312 35.5537 371.31 35.7157 372.34 36.6494C373.336 37.5532 373.297 39.3139 373.741 40.6952C374.171 42.0339 374.625 43.2148 376.476 43.7819C377.53 44.1059 378.292 45.274 379.083 46.1309C379.874 46.9879 380.328 48.1901 381.3 48.7912C383.243 50.002 385.152 51.0934 385.172 53.4638C385.172 53.8901 385.265 54.5637 385.025 54.6874C384.581 54.9133 383.922 54.8281 383.35 54.8451C382.066 54.8835 380.782 54.9133 379.498 54.9304C379.161 54.9346 378.707 55.0029 378.512 54.8451C377.208 53.8219 376.324 54.2952 375.694 55.4377C375.201 56.333 374.513 57.0663 376.212 57.9701C376.949 58.3623 376.91 60.5196 376.534 61.709C375.733 64.2244 374.474 66.6289 373.272 69.3702C371.695 67.9803 370.05 66.6374 369.864 64.5271C369.703 62.7621 369.723 60.9715 369.854 59.2064C370.182 54.7343 368.062 51.1829 364.024 48.7529C360.147 46.4209 357.945 42.8951 354.806 40.06C353.229 38.6361 351.812 37.0842 350.235 35.494H350.23Z"
            class="fill-nbgreenmain hover:fill-nbbluemain active:fill-nborangemain"
          />
          <path
            d="M294.097 162.336C293.106 159.088 291.646 156.96 288.76 155.413C286.925 154.428 285.772 152.454 284.39 150.868C284.146 150.587 284.273 150.037 284.278 149.61C284.312 147.266 284.327 144.921 284.42 142.576C284.454 141.757 284.429 140.807 284.879 140.154C286.578 137.682 285.635 135.542 284.224 133.308C282.31 130.268 283.345 126.333 286.202 124.662C286.851 124.282 288.126 124.022 288.677 124.325C291.231 125.719 294.942 126.077 295.933 128.916C296.592 130.797 296.383 133.056 295.953 135.047C295.167 138.675 296.871 142.793 300.425 144.72C303.345 146.302 303.482 147.82 301.407 150.195C300.45 151.286 300.176 152.821 299.503 154.121C299.185 154.735 298.648 155.259 298.243 155.839C297.667 156.67 297.11 157.51 296.568 158.359C295.826 159.523 295.103 160.699 294.083 162.336H294.097Z"
            class="fill-nbgreenmain hover:fill-nbbluemain active:fill-nborangemain"
          />
          <path
            d="M115.431 13.8949C115.431 12.8887 115.362 12.245 115.445 11.6225C115.65 10.0366 114.889 9.3502 113.082 9.57616C110.836 9.85754 109.645 9.20952 110.04 7.0523C110.099 6.73255 109.937 6.37869 109.859 5.93105C111.632 5.18923 113.429 4.29393 115.343 3.68428C116.461 3.32617 117.574 2.58009 118.805 4.32805C120.177 6.27211 124.84 6.00352 127.374 4.38347C130.719 2.23903 131.554 2.3115 134.483 4.63926C135.597 5.52176 136.861 6.30621 138.184 6.93291C139.601 7.60651 139.893 8.34833 139.127 9.58043C138.189 11.0896 137.647 12.2705 140.26 13.3747C141.573 13.929 142.13 16.1033 142.657 17.6423C142.784 18.0175 141.461 18.8104 140.738 19.3476C140.069 19.8464 138.961 20.1193 138.663 20.7247C137.564 22.9501 136.725 25.2693 135.699 27.7676C132.989 28.032 130.196 24.5318 129.381 19.1302C126.847 18.2861 125.396 19.9232 123.38 21.4111C123.121 20.4476 122.901 19.7867 122.774 19.1131C122.672 18.5589 122.765 17.5144 122.628 17.4974C119.674 17.0838 119.498 12.8333 115.44 13.8949H115.431Z"
            class="fill-nbgreenmain hover:fill-nbbluemain active:fill-nborangemain"
          />
          <path
            d="M297.641 131.52C298.974 130.382 299.877 129.542 300.864 128.779C301.596 128.216 302.485 127.283 303.222 127.338C305.366 127.5 306.918 126.571 308.696 125.867C310.815 125.027 313.129 124.554 315.366 123.944C315.468 123.915 315.634 124.119 315.781 124.136C318.906 124.528 324.784 130.066 324.833 132.676C324.867 134.632 320.146 138.423 317.47 138.282C314.457 138.124 312.436 139.058 310.873 141.296C310.322 142.089 309.033 142.592 307.963 142.976C306.454 143.517 304.736 144.319 303.29 144.097C301.762 143.862 300.082 142.805 299.111 141.684C296.284 138.418 297.563 134.577 297.641 131.52Z"
            class="fill-nbgreenmain hover:fill-nbbluemain active:fill-nborangemain"
          />
          <path
            d="M526.255 80.4156C529.199 78.5525 532.505 76.4678 535.566 74.5322C537.075 75.4702 538.501 76.2503 539.77 77.1925C540.405 77.6615 541.035 78.3948 541.152 79.0726C541.387 80.4284 541.714 81.4601 543.506 81.7969C544.394 81.9632 545.181 82.5387 546.118 82.9778C545.923 83.4681 545.713 83.8305 545.64 84.2142C545.205 86.4567 545.928 87.5267 548.496 87.531C552.227 87.531 553.838 89.4964 554.844 92.1311C555.059 92.6896 554.878 93.5806 554.477 94.0581C553.599 95.0983 552.29 96.8634 551.455 96.744C549.033 96.3944 546.631 95.4607 544.468 94.3821C542.534 93.4144 541.06 91.7346 539.116 90.7839C538.086 90.2808 536.318 90.2979 535.176 90.7029C531.445 92.0245 530.137 91.4916 529.478 88.017C529.204 86.5846 528.97 85.1222 528.437 83.7537C528.037 82.722 527.197 81.8182 526.25 80.4113L526.255 80.4156Z"
            class="fill-nbgreenmain hover:fill-nbbluemain active:fill-nborangemain"
          />
          <path
            d="M215.877 76.1403C215.633 76.1189 214.93 76.0593 213.66 75.9527C214.339 75.245 214.759 74.7888 215.198 74.3497C217.459 72.0816 220.037 72.4184 222.859 73.4757C225.037 74.29 226.824 73.7486 228.67 72.2436C230.013 71.1479 232.156 70.3805 234.007 70.2654C237.884 70.031 241.614 69.95 243.416 65.9766C246.17 70.3251 245.774 71.2588 241.399 73.1602C239.07 74.1749 237.005 75.4496 237.449 78.3018C237.747 80.233 236.033 81.1198 234.187 81.7891C234.1 83.2088 234.007 84.6498 233.919 86.0865C233.685 86.2613 233.445 86.4404 233.211 86.6152C231.311 85.673 229.456 84.6626 227.498 83.8312C226.844 83.5541 225.501 83.4305 225.208 83.7502C223.709 85.3788 221.556 85.4129 219.559 85.8478C218.807 86.0098 218.03 86.0823 217.186 86.2059C216.756 82.9104 216.331 79.6319 215.877 76.1403Z"
            class="fill-nbgreenmain hover:fill-nbbluemain active:fill-nborangemain"
          />
          <path
            d="M363.074 123.739C364.612 122.026 365.755 120.103 368.616 119.915C369.207 119.877 369.72 118.909 370.35 118.282C372.913 118.798 375.726 121.092 378.255 117.289C379.373 122.691 383.406 124.153 388.333 124.771C389.314 124.895 390.164 125.85 391.59 126.745C388.631 127.632 386.448 128.28 384.266 128.945C382.786 129.393 381.287 129.815 379.842 130.335C378.02 130.991 376.321 131.609 375.457 133.519C373.738 137.301 369.822 138.337 365.628 138.742C364.607 138.84 363.553 138.631 363.147 138.601C363.294 136.649 363.211 135.208 363.558 133.852C363.841 132.739 364.476 131.631 365.228 130.689C367.557 127.772 366.902 125.266 363.074 123.739Z"
            class="fill-nbgreenmain hover:fill-nbbluemain active:fill-nborangemain"
          />
          <path
            d="M333.221 198.432C330.673 198.7 331.171 195.311 328.695 196.671C327.47 197.344 326.464 198.316 325.375 199.144C324.916 198.491 324.042 197.545 323.544 196.466C322.909 195.093 321.913 194.607 320.267 194.569C318.334 194.522 318.734 195.839 318.319 196.713C318.202 196.961 318.016 197.187 317.763 197.575C316.752 196.01 315.399 194.829 316.434 192.706C316.845 191.866 315.809 190.203 314.945 189.257C314.037 188.268 312.548 187.684 311.298 186.942C309.452 185.842 309.286 184.879 310.712 183.348C315.17 178.556 321.639 178.266 327.67 181.634C330.643 183.293 333.7 184.657 336.166 187.355C335.184 187.355 334.437 187.407 333.7 187.338C333.241 187.296 332.816 186.972 332.362 186.946C330.985 186.865 329.598 186.869 328.217 186.844C328.529 187.91 328.715 189.022 329.188 190.033C329.76 191.244 330.697 192.326 331.273 193.542C332.015 195.102 332.557 196.735 333.226 198.44L333.221 198.432Z"
            class="fill-nbgreenmain hover:fill-nbbluemain active:fill-nborangemain"
          />
          <path
            d="M281.935 131.32C278.526 128.848 275.392 126.571 272.516 124.486C272.833 123.953 273.658 123.229 273.561 122.615C273.155 120.031 274.117 117.742 275.128 115.431C275.265 115.124 275.543 114.625 275.763 114.621C278.155 114.591 278.512 113.082 278.658 111.402C283.106 113.572 287.354 115.64 291.446 117.64C290.67 119.221 289.952 120.867 289.034 122.419C288.761 122.883 287.94 123.276 287.31 123.369C284.127 123.834 282.022 125.851 281.939 128.686C281.915 129.517 281.939 130.348 281.939 131.32H281.935Z"
            class="fill-nbgreenmain hover:fill-nbbluemain active:fill-nborangemain"
          />
          <path
            d="M297.961 129.478C297.575 125.138 292.473 125.457 290.012 122.707C291.149 121.343 292.365 119.842 293.645 118.389C293.879 118.12 294.401 117.881 294.772 117.894C296.403 117.962 296.462 117.114 296.647 116.006C296.794 115.097 297.331 113.797 298.088 113.533C298.854 113.269 300.324 113.844 301.101 114.437C303.225 116.065 304.846 118.231 307.893 118.789C308.21 118.849 308.693 119.536 308.596 119.774C307.79 121.752 306.906 123.714 305.935 125.632C305.754 125.986 304.992 126.399 304.587 126.34C301.506 125.879 299.616 127.273 297.956 129.478H297.961Z"
            class="fill-nbgreenmain hover:fill-nbbluemain active:fill-nborangemain"
          />
          <path
            d="M481.224 187.025C482.068 186.692 483.357 186.18 484.627 185.682C486.819 187.383 487.239 190.256 485.398 192.69C483.885 194.694 482.273 196.54 482.518 199.175C482.596 200.04 481.81 200.983 481.355 201.865C480.813 202.918 480.276 203.98 479.593 204.965C479.031 205.775 478.26 206.478 477.581 207.228C477.386 207.122 477.195 207.011 477 206.904C478.392 200.356 479.778 193.807 481.219 187.025H481.224Z"
            class="fill-nbgreenmain hover:fill-nbbluemain active:fill-nborangemain"
          />
          <path
            d="M139.699 21.3184C140.495 22.4524 141.037 23.4116 141.775 24.2345C143.396 26.0336 143.235 27.4447 141.135 28.6299C139.792 29.393 137.717 28.502 137.961 27.1079C138.308 25.1383 139.104 23.2283 139.699 21.3184Z"
            class="fill-nbgreenmain hover:fill-nbbluemain active:fill-nborangemain"
          />
          <path
            d="M36.1758 8.7274C35.6631 8.29681 35.1406 7.8662 34.9453 7.7042C39.3203 4.70284 43.6367 1.62476 48.1289 -1.24018C49.0957 -1.85836 50.9121 -2.16532 51.996 -1.81573C55.2822 -0.749901 57.6503 -2.86024 60.4482 -3.35052C60.9267 -3.43578 61.1318 -4.70198 61.6249 -5.77633C60.248 -5.77633 59.2226 -5.52054 58.539 -5.83176C57.2206 -6.43288 56.0927 -7.34949 54.8915 -8.14672C53.9443 -8.77342 53.0556 -9.47687 52.0546 -10.0268C50.0869 -11.1097 47.9238 -11.4422 45.58 -11.455C44.8867 -11.455 44.1982 -12.6232 43.5683 -13.203C44.8623 -15.7311 47.5771 -15.6117 49.6474 -15.8889C54.0175 -16.4729 55.9511 -19.1204 57.6113 -22.0706C58.6757 -23.9635 57.748 -24.9228 54.374 -25.6987C58.5341 -27.0416 54.8915 -30.1155 56.537 -32.3708C57.8359 -28.6318 61.2148 -29.2244 64.1884 -29.007C64.706 -28.9686 65.2821 -28.7128 65.7216 -28.845C66.7909 -29.1733 68.1288 -29.4419 68.744 -30.1453C69.8183 -31.3731 70.5311 -32.8738 71.2098 -34.3233C72.1766 -36.3953 72.9823 -38.2285 70.8534 -40.5307C69.4423 -42.0484 67.9091 -44.5723 70.7313 -46.866C71.4247 -47.4287 71.205 -49.2662 70.7557 -50.2979C70.5653 -50.7328 68.661 -50.801 67.577 -50.6944C65.6093 -50.494 63.6903 -49.9611 61.7275 -49.7309C60.9511 -49.6413 59.5986 -49.7906 59.413 -50.1657C59.12 -50.7669 59.3154 -51.8242 59.7841 -52.3784C60.995 -53.8194 62.2841 -55.2945 63.8759 -56.3774C66.3515 -58.0656 66.078 -60.3678 66.0194 -62.5463C65.9901 -63.5482 65.0722 -64.6524 64.2421 -65.4624C63.9101 -65.7864 62.3671 -65.731 62.0107 -65.3686C60.9364 -64.29 60.1015 -63.0068 59.3202 -61.7363C58.7245 -60.7685 58.3486 -59.6985 57.4941 -58.833C58.29 -63.6463 62.2353 -67.2146 64.5399 -71.4268C64.3153 -71.6485 64.0858 -71.8702 63.8612 -72.0876C61.9716 -71.4268 60.0868 -70.7617 58.1093 -70.0711C57.2304 -72.0407 59.0663 -72.6461 60.1698 -73.5073C60.7411 -73.9549 61.6151 -74.0828 62.2987 -74.4367C64.0272 -75.3277 64.2177 -76.6024 62.8603 -77.8985C62.3671 -78.3674 61.8056 -78.7852 61.3222 -79.2627C58.7099 -81.8377 59.0322 -83.0315 62.9433 -84.6686C63.036 -84.336 63.0556 -84.012 63.2167 -83.752C63.5634 -83.1849 63.8954 -82.2854 64.3886 -82.1959C64.9794 -82.0893 65.8583 -82.5796 66.3905 -83.0144C66.9423 -83.4706 67.0936 -84.3232 67.6698 -84.7368C68.412 -85.2697 69.4423 -85.4956 70.2821 -85.9433C71.6932 -86.6936 73.3973 -87.2905 74.3495 -88.3734C75.5116 -89.6907 76.034 -91.4472 76.6005 -92.5557C78.4852 -92.4747 80.3504 -92.4747 82.1913 -92.2913C84.3153 -92.0824 86.4246 -91.7115 88.5389 -91.4088C88.5731 -91.1189 88.6121 -90.829 88.6463 -90.5391C87.162 -89.7803 85.6776 -89.0171 84.1883 -88.2583C83.0311 -87.6699 81.8592 -87.1029 80.7313 -86.4847C80.4041 -86.3057 80.0087 -86.003 79.9452 -85.7045C79.6278 -84.2678 79.4129 -82.814 79.12 -81.0959C80.8338 -81.2793 82.8163 -81.1258 84.4178 -81.7354C87.8309 -83.04 90.5848 -81.5564 93.4363 -80.5588C94.9842 -80.0173 94.5203 -78.7938 93.7586 -77.8942C91.1902 -74.8673 88.4119 -71.9768 85.9803 -68.8731C84.0516 -66.4132 81.9764 -64.4392 78.3924 -63.9063C77.6307 -63.7912 77.0887 -62.5591 76.3124 -61.6937C79.1542 -60.9775 81.4588 -60.6577 83.4803 -59.8178C85.6239 -58.9225 87.4696 -54.3651 86.9715 -52.3528C86.2391 -49.4026 86.5028 -46.5164 87.8651 -43.7239C88.0213 -43.4084 88.158 -42.948 88.451 -42.8371C93.4998 -40.8845 93.4119 -36.7492 93.9344 -32.9292C94.1004 -31.6972 93.7049 -30.4139 93.7 -29.1562C93.7 -28.3718 93.6512 -27.404 94.1297 -26.8413C95.3602 -25.3875 95.3016 -24.2279 93.8856 -22.9361C93.2166 -22.3222 92.8211 -21.478 91.9764 -20.2801C93.8465 -20.2801 95.1014 -20.2502 96.3562 -20.2843C100.116 -20.3909 103.275 -19.2867 105.297 -16.4729C105.892 -15.6416 105.99 -14.2517 105.687 -13.2669C104.818 -10.419 102.181 -8.76064 99.5887 -7.12354C97.2156 -5.62712 94.7938 -4.17332 92.5574 -2.53196C91.5028 -1.7603 91.6785 -0.707268 93.1336 -0.229782C94.9646 0.371346 96.8348 0.874405 98.7684 1.44142C97.9871 3.14248 96.4979 4.14435 94.2567 4.47688C91.9959 4.81368 89.7889 5.40629 87.5282 5.73883C86.5077 5.88805 85.4237 5.66208 84.3641 5.62371C82.1229 5.53844 79.8817 5.44891 77.6405 5.40628C77.1913 5.39775 76.7079 5.72604 76.2928 5.65356C73.4218 5.15901 70.5897 4.28503 67.704 4.15714C65.2138 4.05055 62.6796 4.7881 60.1601 5.11638C59.4618 5.20591 58.7197 5.26135 58.0312 5.16329C55.5263 4.80944 53.0117 4.0122 51.6298 6.99651C51.166 8.0069 49.999 8.55685 48.6171 7.32476C46.4492 5.39349 43.7197 5.89232 41.1806 6.62987C39.4717 7.12441 37.9043 7.98557 36.2002 8.71033L36.1758 8.7274Z"
            class="fill-nbgreenmain hover:fill-nbbluemain active:fill-nborangemain"
          />
          <path
            d="M235.982 187.012C235.982 188.227 236.026 189.011 235.967 189.796C235.928 190.337 235.909 190.951 235.606 191.386C233.711 194.132 234.38 196.911 235.586 199.597C236.094 200.735 235.904 201.328 235.01 202.168C233.77 203.336 232.647 204.632 231.719 206.001C230.982 207.083 230.332 207.297 229.312 206.423C227.901 205.208 226.602 203.877 225.079 202.777C224.2 202.142 222.979 201.494 221.915 201.498C219.4 201.498 217.623 200.552 215.64 199.316C212.911 197.61 209.708 196.481 206.753 195.04C205.064 194.217 203.404 193.33 201.832 192.349C199.791 191.075 200.572 189.804 202.081 188.675C203.047 187.954 204.087 187.315 205.152 186.603C205.679 187.285 206.114 188.061 206.778 188.628C207.271 189.054 208.038 189.318 208.736 189.463C209.81 189.689 211.001 189.587 212.017 189.919C214.727 190.815 217.261 190.904 220.147 190.141C223.086 189.365 226.329 189.514 229.385 189.024C230.889 188.785 232.276 187.988 233.741 187.511C234.512 187.259 235.347 187.148 235.982 187.012Z"
            class="fill-nbgreenmain hover:fill-nbbluemain active:fill-nborangemain"
          />
          <path
            d="M157.109 175.812C152.461 175.386 150.869 171.502 153.667 166.651C154.678 164.894 155.112 163.355 152.92 161.906C155.684 159.279 154.253 156.687 153.11 153.955C152.314 152.057 152.124 149.973 151.66 147.969C151.88 147.888 152.1 147.811 152.319 147.73C153.027 148.148 153.887 149.026 154.424 148.894C156.353 148.421 158.452 147.909 159.976 146.852C162.539 145.083 163.74 145.164 165.278 147.769C166.294 149.482 167.588 151.073 168.599 152.786C168.892 153.289 168.74 154.061 168.599 154.679C168.179 156.568 167.588 158.427 167.207 160.32C166.504 163.803 165.903 167.303 165.249 170.795C165.005 172.099 164.033 172.543 162.632 172.419C160.155 172.2 158.498 173.054 157.661 174.981C157.529 175.288 157.275 175.552 157.104 175.804L157.109 175.812Z"
            class="fill-nbgreenmain hover:fill-nbbluemain active:fill-nborangemain"
          />
          <path
            d="M464.476 180.426C463.768 180.908 463.075 181.419 462.342 181.871C460.492 183.018 459.993 184.728 460.238 186.493C460.599 189.132 460.194 190.219 457.293 190.666C455.052 191.012 454.119 192.107 453.075 193.629C452.142 194.989 450.789 196.319 449.256 197.13C446.815 198.417 443.988 197.202 443.187 194.815C442.777 193.595 443.216 192.726 444.554 192.005C445.999 191.229 447.21 190.121 448.558 189.196C449.105 188.82 449.74 188.253 450.326 188.266C453.324 188.33 454.696 186.539 456.102 184.711C456.439 184.271 456.834 183.815 457.327 183.53C459.183 182.46 461.082 181.445 462.987 180.443C463.358 180.251 463.831 180.209 464.256 180.098C464.329 180.209 464.408 180.319 464.481 180.426H464.476Z"
            class="fill-nbgreenmain hover:fill-nbbluemain active:fill-nborangemain"
          />
          <path
            d="M166.864 123.3C168.485 129.567 165.16 135.306 163.373 141.355C162.245 140.98 161.283 140.882 160.702 140.417C159.798 139.697 158.661 138.789 158.509 137.851C158.256 136.299 158.802 134.662 158.832 133.059C158.856 131.886 158.675 130.697 158.436 129.537C158.08 127.802 158.788 126.92 160.78 126.813C163.68 126.66 166.522 124.899 166.854 123.296L166.864 123.3Z"
            class="fill-nbgreenmain hover:fill-nbbluemain active:fill-nborangemain"
          />
          <path
            d="M81.8104 160.522C81.5126 159.252 81.8446 158.6 83.7538 158.233C85.9804 157.807 88.0165 156.63 90.37 155.684C91.2684 156.784 92.1376 157.849 93.1532 159.094C92.2938 159.913 91.4979 160.633 90.746 161.384C89.9647 162.168 89.2225 162.987 88.5975 163.652C86.3026 162.59 84.1005 161.575 81.8104 160.518V160.522Z"
            class="fill-nbgreenmain hover:fill-nbbluemain active:fill-nborangemain"
          />
          <g style="mix-blend-mode: screen">
            <rect
              x="439.398"
              y="133.672"
              width="29.9519"
              height="5.75999"
              fill="url(#pattern1_0_1)"
            />
          </g>
          <path
            d="M262.113 58.7914C263.296 58.7914 263.965 59.4271 263.965 60.3826C263.976 60.6275 263.91 60.8696 263.776 61.0751C263.643 61.2806 263.448 61.4394 263.22 61.5292V61.5623C263.506 61.6589 263.752 61.846 263.921 62.0952C264.09 62.3444 264.173 62.642 264.158 62.9429C264.158 64.0037 263.462 64.6666 262.226 64.6666H259.277V58.7914H262.113ZM261.877 61.2211C262.438 61.2211 262.729 60.9461 262.729 60.484C262.729 60.0218 262.438 59.7469 261.877 59.7469H260.512V61.2211H261.877ZM261.978 63.6897C262.586 63.6897 262.902 63.3914 262.902 62.8902C262.902 62.3891 262.586 62.0907 261.978 62.0907H260.512V63.6897H261.978ZM265.515 64.6663H266.75V58.791H265.515V64.6663ZM268.215 58.7916V59.8309H271.144L268.03 63.6295V64.6688H272.72V63.6295H269.623L272.728 59.8309V58.7916H268.215ZM276.823 58.7916C278.18 58.7916 278.946 59.5189 278.946 60.6909C278.946 61.8628 278.182 62.5901 276.825 62.5901H275.333V64.6668H274.099V58.7916H276.823ZM276.618 61.6112C277.318 61.6112 277.689 61.2681 277.689 60.6909C277.689 60.1137 277.318 59.7705 276.618 59.7705H275.333V61.6112H276.618ZM288.709 58.7916L287.315 61.3578L285.922 58.7916H284.569L286.687 62.4244V64.6688H287.921V62.4185L290.039 58.7916H288.709Z"
            fill="white"
          />
          <path
            d="M281.215 58.791L279.197 64.1905L279.02 64.6663H280.336L282.001 63.3637H282.054L283.707 64.6663H285.035L284.86 64.1944L282.84 58.791H281.215ZM281.995 59.842H282.028L283.07 62.8294L282.028 62.0377H282.003L280.964 62.8352L281.995 59.842Z"
            fill="white"
          />
          <g style="mix-blend-mode: screen">
            <rect
              x="323.23"
              y="91.9814"
              width="45.3327"
              height="45.3327"
              fill="url(#pattern2_0_1)"
            />
          </g>
          <g style="mix-blend-mode: screen">
            <rect
              x="196.539"
              y="116.671"
              width="14.5712"
              height="14.5712"
              fill="url(#pattern3_0_1)"
            />
          </g>
          <defs>
            <pattern
              id="pattern0_0_1"
              patternContentUnits="objectBoundingBox"
              width="1"
              height="1"
            >
              {/* <use xlink:href="#image0_0_1" transform="scale(0.00123457)" /> */}

            <div class="flex lg:flex-row flex-col gap-12">
              <div class="border-nbgreymain pl-6 border-l-2 border-dashed text-nowrap">
                <h2 class="font-bold font-h2-title text-md text-nbgreydark font">
                  primer piackutatási kérdőí
                  <a class="underline underline-offset-2 decoration-nbgreenmain">
                    ~400 kitöltés
                  </a>
                </h2>
                <h2 class="font-bold font-h2-title text-md text-nbgreydark font">
                  <a class="underline underline-offset-2 decoration-nbgreenmain">
                    12
                  </a>
                  Letter of Intent
                </h2>
                <h2 class="font-bold font-h2-title text-md text-nbgreydark font">
                  összesen
                  <a class="underline underline-offset-2 decoration-nbgreenmain">
                    231
                  </a>
                  év szakmai tapasztalat
                </h2>
                <h2 class="font-bold font-h2-title text-md text-nbgreydark font">
                  <a class="underline underline-offset-2 decoration-nbgreenmain">
                    5 ország
                  </a>
                  szakmai partnerei
                </h2>
              </div>
              <div class="border-nbgreymain pl-6 border-l-2 border-dashed text-nowrap">
                <h2 class="font-bold font-h2-title text-nbgreenmain text-xs font">
                  ebből filmprodukciós cégek
                </h2>
                <h2 class="font-bold font-h2-title text-nbgreydark text-sm font">
                  Chudatsi <a class="text-nbgreenmain">(BG)</a>
                </h2>
                <h2 class="font-bold font-h2-title text-nbgreydark text-sm font">
                  Nuve Film <a class="text-nbgreenmain">(TR)</a>
                </h2>
                <h2 class="font-bold font-h2-title text-nbgreenmain text-nowrap text-xs font">
                  online fizetési szolgáltatás
                </h2>
                <h2 class="font-bold font-h2-title text-nbgreydark text-sm font">
                  Bizpay <a class="text-nbgreenmain">(HU)</a>
                </h2>
              </div>
            </div>
            <div
              id="team"
              class="flex items-center bg-nbgreymain bg-opacity-50 rounded-full w-full h-3"
            >
              <h2 class="bg-nbgreydark pr-3 pl-3 rounded-lg w-auto max-w-fit font-h2-title text-lg text-nbwhite italic">
                csapat
              </h2>
            </div>
            <div class="flex lg:flex-row flex-col items-center gap-6">
              <div class="grid grid-col bg-nbgreymain bg-opacity-15 rounded-lg min-w-fit min-h-fit">
                <div class="flex flex-row gap-3 px-5 pt-5 min-w-[180px]">
                  <img
                    class="rounded-full max-w-[61px] max-h-[61px]"
                    src="https://firebasestorage.googleapis.com/v0/b/near-balkan-films.appspot.com/o/images%2FMatyi.jpg?alt=media&token=e71f3bb3-5a31-4e52-be81-f36e472f118a"
                    alt="projectvezető-1"
                  />
                  <div class="flex flex-col">
                    <h2 class="font-bold font-h2-title text-md text-nbgreydark text-nowrap underline underline-offset-2 decoration-nbgreenmain">
                      Bizzer I. Mátyás
                    </h2>
                    <h2 class="font-bold font-h2-title text-[10px] text-nbgreymain">
                      <a class="font-bold text-nbgreenmain">CEO</a> / marketing,
                      tartfejl.
                    </h2>
                    <p class="font-p-paragraph text-nbgreymain text-xs">
                      ex-vállalati marketing-
                    </p>
                    <p class="font-p-paragraph text-nbgreymain text-xs">
                      menedzser (bankszféra)
                    </p>
                  </div>
                </div>
                <div class="flex flex-row gap-3 p-5 min-w-[180px]">
                  <img
                    class="rounded-full max-w-[61px] max-h-[61px]"
                    src="https://firebasestorage.googleapis.com/v0/b/near-balkan-films.appspot.com/o/images%2FDani.jpg?alt=media&token=8fa753c2-e2dc-457f-888d-c66b31f41743"
                    alt="projectvezető-2"
                  />
                  <div class="flex flex-col">
                    <h2 class="font-bold font-h2-title text-md text-nbgreydark text-nowrap underline underline-offset-2 decoration-nbgreenmain">
                      Huszár Dániel
                    </h2>
                    <h2 class="font-bold font-h2-title text-[10px] text-nbgreymain">
                      <a class="font-bold text-nbgreenmain">CFO</a> /
                      menedzsment, gazd.
                    </h2>
                    <p class="font-p-paragraph text-nbgreymain text-xs">
                      ex-Big Four tanácsadó
                    </p>
                  </div>
                </div>
                <div class="flex flex-row gap-3 px-5 pt-3 pb-5 lg:min-w-[180px]">
                  <img
                    class="rounded-full max-w-[61px] max-h-[61px]"
                    src="https://firebasestorage.googleapis.com/v0/b/near-balkan-films.appspot.com/o/images%2FTamas.jpg?alt=media&token=25133138-df30-4de1-b1b3-72d04260d7ce"
                    alt="web csapatvezető-1"
                  />
                  <div class="flex flex-col">
                    <h2 class="font-bold font-h2-title text-md text-nbgreydark text-nowrap underline underline-offset-2 decoration-nbgreenmain">
                      Kotán Tamás
                    </h2>
                    <h2 class="font-bold font-h2-title text-[10px] text-nbgreymain">
                      <a class="font-bold text-nbgreenmain">CTO</a> /
                      webfejlesztés
                    </h2>
                    <p class="font-p-paragraph text-nbgreymain text-xs">
                      villamosmérnök,
                    </p>
                    <p class="font-p-paragraph text-nbgreymain text-xs">
                      webfejlesztő
                    </p>
                  </div>
                </div>
              </div>
              <div id="kiegészitoSzakmaiStabunk">
                <div class="flex flex-col gap-5 border-nbgreymain pl-6 border-l-2 border-dashed">
                  <h2 class="font-bold font-h2-title text-base text-nbgreenmain text-nowrap decoration-nbgreydark">
                    kiegészítő szakmai stábunk
                  </h2>
                  <div class="flex lg:flex-row flex-col">
                    <div class="flex flex-col gap-5">
                      <div class="flex flex-col gap-2">
                        <div class="flex flex-row gap-0.5">
                          <img
                            class="rounded-full w-[14px] h-[14px]"
                            src="https://firebasestorage.googleapis.com/v0/b/near-balkan-films.appspot.com/o/images%2FManagement1.jpg?alt=media&token=0541c6ae-8bae-4a98-98bb-ae00c643de58"
                          />
                          <img
                            class="rounded-full w-[14px] h-[14px]"
                            src="https://firebasestorage.googleapis.com/v0/b/near-balkan-films.appspot.com/o/images%2FManagement2.jpg?alt=media&token=491a06a0-054f-4a68-bcf6-63f83b1862ed"
                          />
                        </div>
                        <h2 class="font-bold font-h2-title text-nbgreydark text-sm underline underline-offset-2 undeline-nbgreymain">
                          menedzsment
                        </h2>
                        <p class="font-p-paragraph text-[10px] text-nbgreymain">
                          üzleti és jogi tervezés, munkaszervezés
                        </p>
                      </div>
                      <div class="flex flex-col gap-2">
                        <div class="flex flex-row gap-0.5">
                          <img
                            class="rounded-full w-[14px] h-[14px]"
                            src="https://firebasestorage.googleapis.com/v0/b/near-balkan-films.appspot.com/o/images%2FJoco.jpg?alt=media&token=0a9f0f2f-8eef-4377-8595-d613b68aff31"
                          />
                          <img
                            class="rounded-full w-[14px] h-[14px]"
                            src="https://firebasestorage.googleapis.com/v0/b/near-balkan-films.appspot.com/o/images%2FVTamas.png?alt=media&token=79aecee0-8496-4490-8673-913c33cb3ad6"
                          />
                          <img
                            class="rounded-full w-[14px] h-[14px]"
                            src="https://firebasestorage.googleapis.com/v0/b/near-balkan-films.appspot.com/o/images%2FZoli.jpg?alt=media&token=eed25669-6c73-4d15-b7f9-efa734539347"
                          />
                        </div>
                        <h2 class="font-bold font-h2-title text-nbgreydark text-nowrap text-sm underline underline-offset-2 undeline-nbgreymain">
                          marketing & UX/UI
                        </h2>
                        <p class="font-p-paragraph text-[10px] text-nbgreymain">
                          ügyfélelemzés, marketing-stratégia,
                          vizuális/reklámtervezés
                        </p>
                      </div>
                    </div>
                    <div class="flex flex-col gap-5 pt-5 lg:pt-0 lg:pl-5">
                      <div class="flex flex-col gap-2">
                        <div class="flex flex-row gap-0.5">
                          <img
                            class="rounded-full w-[14px] h-[14px]"
                            src="https://firebasestorage.googleapis.com/v0/b/near-balkan-films.appspot.com/o/images%2FTamas.jpg?alt=media&token=25133138-df30-4de1-b1b3-72d04260d7ce"
                          />
                          <img
                            class="rounded-full w-[14px] h-[14px]"
                            src="https://firebasestorage.googleapis.com/v0/b/near-balkan-films.appspot.com/o/images%2FLili.jpg?alt=media&token=29eec614-e016-45d8-9b8a-b9fb7635be12"
                          />
                          <img
                            class="rounded-full w-[14px] h-[14px]"
                            src="https://firebasestorage.googleapis.com/v0/b/near-balkan-films.appspot.com/o/images%2FLili.jpg?alt=media&token=29eec614-e016-45d8-9b8a-b9fb7635be12"
                          />
                        </div>
                        <h2 class="font-bold font-h2-title text-nbgreydark text-sm underline underline-offset-2 undeline-nbgreymain">
                          webfejlesztés
                        </h2>
                        <p class="font-p-paragraph text-[10px] text-nbgreymain">
                          front- és backend-fejlesztés
                        </p>
                      </div>
                      <div class="flex flex-col gap-2">
                        <div class="flex flex-row gap-0.5">
                          <img
                            class="rounded-full w-[14px] h-[14px]"
                            src="https://firebasestorage.googleapis.com/v0/b/near-balkan-films.appspot.com/o/images%2FTimi.jpg?alt=media&token=20a8b461-c277-4a6c-94be-44eb465e1a56"
                          />
                          <img
                            class="rounded-full w-[14px] h-[14px]"
                            src="https://firebasestorage.googleapis.com/v0/b/near-balkan-films.appspot.com/o/images%2FPeti.jpg?alt=media&token=c4562284-3897-48d5-b89d-e5ad446fbef4"
                          />
                          <img
                            class="rounded-full w-[14px] h-[14px]"
                            src="https://firebasestorage.googleapis.com/v0/b/near-balkan-films.appspot.com/o/images%2FZsiga.jpg?alt=media&token=35b53bd3-4bbe-49c2-aa6d-2ed9ddaca576"
                          />
                          <img
                            class="rounded-full w-[14px] h-[14px]"
                            src="https://firebasestorage.googleapis.com/v0/b/near-balkan-films.appspot.com/o/images%2FAdam.jpg?alt=media&token=648adce0-ab1d-4706-8c35-bb8b15924c43"
                          />
                          <img
                            class="rounded-full w-[14px] h-[14px]"
                            src="https://firebasestorage.googleapis.com/v0/b/near-balkan-films.appspot.com/o/images%2FZalan.jpg?alt=media&token=eddfdeac-c654-4a24-b9ac-69dd0c3c8f2e"
                          />
                        </div>
                        <h2 class="font-bold font-h2-title text-nbgreydark text-sm underline underline-offset-2 undeline-nbgreymain">
                          tartalomgyártás
                        </h2>
                        <p class="font-p-paragraph text-[10px] text-nbgreymain">
                          mozgóképes tartalomgyártás, szakmai kontroll
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              id="roadmap"
              class="flex items-center bg-nbgreymain bg-opacity-50 rounded-full w-full h-3"
            >
              <h2 class="bg-nbgreydark pr-3 pl-3 rounded-lg w-auto max-w-fit font-h2-title text-lg text-nbwhite italic">
                mérföldkövek
              </h2>
            </div>
            <div class="max-w-[500px] overflow-x-auto">
              <div class="flex flex-row gap-16 text-nowrap">
                <div class="flex flex-col">
                  <h2 class="font-bold font-h2-title text-nbgreydark text-sm">
                    kész MVP
                  </h2>
                  <h2 class="font-h2-title text-nbgreydark text-xs">
                    corwedfounding, events
                  </h2>
                </div>
                <div class="flex flex-col">
                  <h2 class="font-bold font-h2-title text-nbgreydark text-sm">
                    Pre-Seed (€100k)
                  </h2>
                  <h2 class="font-h2-title text-nbgreydark text-xs">
                    piacra lépés
                  </h2>
                </div>
                <div class="flex flex-col">
                  <h2 class="font-bold font-h2-title text-nbgreydark text-sm">
                    Seed (€500k)
                  </h2>
                  <h2 class="font-h2-title text-nbgreydark text-xs">
                    streaming, webshop
                  </h2>
                </div>
              </div>
              <div class="flex flex-row gap-1">
                <svg
                  width="422"
                  height="30"
                  viewBox="0 0 422 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M342.751 28.4983L369.825 1.15625H421.359"
                    stroke="#507A86"
                    stroke-width="0.944245"
                  />
                  <path
                    d="M168.614 28.6487L195.688 1.30664H247.223"
                    stroke="#46BEA4"
                    stroke-width="0.944245"
                  />
                  <path
                    d="M75.5704 28.8323L46.1995 1.49023L0 1.49023"
                    stroke="#F4451E"
                    stroke-width="0.944245"
                  />
                </svg>
              </div>
              <div class="flex flex-row gap-1">
                <div class="flex flex-col">
                  <h2 class="flex justify-center bg-nbredmain w-24 font-bold font-h4-lead text-nbwhite text-xs">
                    eddig
                  </h2>
                </div>
                <div class="flex flex-row">
                  <h2 class="flex justify-center bg-nbgreenmain w-24 font-h4-lead text-nbwhite text-xs">
                    <a class="font-bold">2024</a> / Q3-Q4
                  </h2>
                  <h2 class="flex justify-center bg-nbgreydark w-24 font-bold font-h4-lead text-nbwhite text-xs">
                    2025
                  </h2>
                  <h2 class="flex justify-center bg-nbbluedark w-24 font-bold font-h4-lead text-nbwhite text-xs">
                    2026
                  </h2>
                  <h2 class="flex justify-center bg-nbbluemain w-40 font-bold font-h4-lead text-nbwhite text-xs">
                    2027-29
                  </h2>
                </div>
              </div>
              <div class="flex flex-row-reverse gap-1">
                <svg
                  width="293"
                  height="31"
                  viewBox="0 0 293 31"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M213.829 0.448918L240.903 30.4492H292.438"
                    stroke="#31AFF6"
                    stroke-width="0.944245"
                  />
                  <path
                    d="M0.961083 1.26102L28.1655 30.1221H79.9492"
                    stroke="#2B535D"
                    stroke-width="0.944245"
                  />
                </svg>
              </div>
              <div class="flex flex-row-reverse gap-16 text-nowrap">
                <div class="flex flex-col">
                  <h2 class="font-h2-title text-nbgreydark text-xs">
                    5 millió felhasználó
                  </h2>
                  <h2 class="font-h2-title text-nbgreydark text-xs">
                    €60 millió profit
                  </h2>
                </div>
                <div class="flex flex-col">
                  <h2 class="font-h2-title text-nbgreydark text-xs">
                    gyártástámogatás regionális
                  </h2>
                  <h2 class="font-h2-title text-nbgreydark text-xs">
                    (EU) terjeszkedése
                  </h2>
                </div>
              </div>
            </div>
            <div
              id="preSeedInvestment"
              class="flex items-center bg-nbgreymain bg-opacity-50 rounded-full w-full h-3"
            >
              <h2 class="bg-nbgreenmain pr-3 pl-3 rounded-lg w-auto max-w-fit font-h2-title text-lg text-nbwhite italic">
                pre-seed befektetési lehetőség
              </h2>
            </div>
            <div class="flex lg:flex-row flex-col md:flex-col justify-between items-center gap-5">
              <div class="flex flex-col items-center pr-6">
                <h2 class="relative font-bold font-h2-title text-[78px] text-nbgreydark">
                  €100k
                </h2>
                <div class="border-nbgreenmain border-t-8 w-60 -translate-y-6"></div>
              </div>
              <p class="border-nbgreymain pl-6 border-l-2 border-dashed font-p-paragraph text-base text-nbgreydark lg:text-sm">
                A befektetést inkorporációra, az online fizetési szolgáltatás
                bekötésére, a weboldal üzemeltetésére (szerverdíjak és
                videó-fogyasztási ráták), marketing-költségekre, belső
                fejlesztői bérköltségre és egyéb megjelenési költségekre
                fordítanánk.
              </p>
            </div>
          </div>
        </div>
        <footer
          id="footer"
          class="flex lg:flex-row flex-col justify-between items-center bg-nbgreylight px-11 py-9 max-w-screen-sm lg:max-w-screen-xl"
        >
          <h2 class="font-bold font-h2-title text-2xl text-nbgreenlight text-nowrap leading-9">
            near-balkan.com
          </h2>
          <div class="border-nbgreymain mx-9 border-t-[3px] lg:w-full max-w-sm h-px"></div>
          <h2 class="font-bold font-h2-title text-2xl text-nbgreenlight text-nowrap leading-9">
            production@near-balkan.com
          </h2>
        </footer>
      </body>
    </>
  );
};

export default About;
