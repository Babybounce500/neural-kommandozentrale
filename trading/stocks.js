/* COMMANDO-ZENTRALE // Shared Market Data Library */
const MARKETS = [
    {
      "id": "dow30",
      "label": "🇺🇸 DOW JONES 30",
      "exchange": "NYSE / NASDAQ",
      "suffix": ".US",
      "currency": "USD",
      "stocks": [
        {
          "sym": "AAPL.US",
          "name": "Apple Inc."
        },
        {
          "sym": "MSFT.US",
          "name": "Microsoft Corp."
        },
        {
          "sym": "JPM.US",
          "name": "JPMorgan Chase"
        },
        {
          "sym": "GS.US",
          "name": "Goldman Sachs"
        },
        {
          "sym": "JNJ.US",
          "name": "Johnson & Johnson"
        },
        {
          "sym": "NKE.US",
          "name": "Nike Inc."
        },
        {
          "sym": "V.US",
          "name": "Visa Inc."
        },
        {
          "sym": "HD.US",
          "name": "Home Depot"
        },
        {
          "sym": "MCD.US",
          "name": "McDonald's Corp."
        },
        {
          "sym": "KO.US",
          "name": "Coca-Cola Co."
        },
        {
          "sym": "IBM.US",
          "name": "IBM Corp."
        },
        {
          "sym": "CVX.US",
          "name": "Chevron Corp."
        },
        {
          "sym": "DIS.US",
          "name": "Walt Disney Co."
        },
        {
          "sym": "CAT.US",
          "name": "Caterpillar Inc."
        },
        {
          "sym": "BA.US",
          "name": "Boeing Co."
        },
        {
          "sym": "AXP.US",
          "name": "American Express"
        },
        {
          "sym": "WMT.US",
          "name": "Walmart Inc."
        },
        {
          "sym": "TRV.US",
          "name": "Travelers Companies"
        },
        {
          "sym": "UNH.US",
          "name": "UnitedHealth Group"
        },
        {
          "sym": "MMM.US",
          "name": "3M Company"
        },
        {
          "sym": "BRK-B.US",
          "name": "Berkshire Hathaway Inc."
        },
        {
          "sym": "PG.US",
          "name": "Procter & Gamble Co."
        },
        {
          "sym": "MA.US",
          "name": "Mastercard Inc."
        },
        {
          "sym": "XOM.US",
          "name": "Exxon Mobil Corporation"
        },
        {
          "sym": "ABBV.US",
          "name": "AbbVie Inc."
        },
        {
          "sym": "AVGO.US",
          "name": "Broadcom Inc."
        },
        {
          "sym": "VZ.US",
          "name": "Verizon Communications Inc."
        },
        {
          "sym": "MRK.US",
          "name": "Merck & Co. Inc."
        },
        {
          "sym": "CSCO.US",
          "name": "Cisco Systems Inc."
        }
      ]
    },
    {
      "id": "nasdaq",
      "label": "🇺🇸 NASDAQ TECH",
      "exchange": "NASDAQ",
      "suffix": ".US",
      "currency": "USD",
      "stocks": [
        {
          "sym": "AAPL.US",
          "name": "Apple Inc."
        },
        {
          "sym": "MSFT.US",
          "name": "Microsoft Corp."
        },
        {
          "sym": "NVDA.US",
          "name": "NVIDIA Corp."
        },
        {
          "sym": "AMZN.US",
          "name": "Amazon.com Inc."
        },
        {
          "sym": "GOOGL.US",
          "name": "Alphabet Inc."
        },
        {
          "sym": "META.US",
          "name": "Meta Platforms"
        },
        {
          "sym": "TSLA.US",
          "name": "Tesla Inc."
        },
        {
          "sym": "NFLX.US",
          "name": "Netflix Inc."
        },
        {
          "sym": "ADBE.US",
          "name": "Adobe Inc."
        },
        {
          "sym": "CRM.US",
          "name": "Salesforce Inc."
        },
        {
          "sym": "QCOM.US",
          "name": "Qualcomm Inc."
        },
        {
          "sym": "INTC.US",
          "name": "Intel Corp."
        },
        {
          "sym": "AMD.US",
          "name": "AMD Inc."
        },
        {
          "sym": "PYPL.US",
          "name": "PayPal Holdings"
        },
        {
          "sym": "AMAT.US",
          "name": "Applied Materials"
        },
        {
          "sym": "MU.US",
          "name": "Micron Technology"
        }
      ]
    },
    {
      "id": "dax",
      "label": "🇩🇪 DAX 40",
      "exchange": "XETRA",
      "suffix": ".XETRA",
      "currency": "EUR",
      "stocks": [
        {
          "sym": "ALV.XETRA",
          "name": "Allianz SE"
        },
        {
          "sym": "SAP.XETRA",
          "name": "SAP SE"
        },
        {
          "sym": "SIE.XETRA",
          "name": "Siemens AG"
        },
        {
          "sym": "BMW.XETRA",
          "name": "BMW AG"
        },
        {
          "sym": "MBG.XETRA",
          "name": "Mercedes-Benz Group"
        },
        {
          "sym": "VOW3.XETRA",
          "name": "Volkswagen AG"
        },
        {
          "sym": "MUV2.XETRA",
          "name": "Munich Re"
        },
        {
          "sym": "DTE.XETRA",
          "name": "Deutsche Telekom"
        },
        {
          "sym": "DBK.XETRA",
          "name": "Deutsche Bank"
        },
        {
          "sym": "BAYN.XETRA",
          "name": "Bayer AG"
        },
        {
          "sym": "BAS.XETRA",
          "name": "BASF SE"
        },
        {
          "sym": "ADS.XETRA",
          "name": "Adidas AG"
        },
        {
          "sym": "RWE.XETRA",
          "name": "RWE AG"
        },
        {
          "sym": "RHM.XETRA",
          "name": "Rheinmetall AG"
        },
        {
          "sym": "MRK.XETRA",
          "name": "Merck KGaA"
        },
        {
          "sym": "HNR1.XETRA",
          "name": "Hannover Rück"
        },
        {
          "sym": "ENR.XETRA",
          "name": "Siemens Energy AG"
        },
        {
          "sym": "FRE.XETRA",
          "name": "Fresenius SE"
        },
        {
          "sym": "HEI.XETRA",
          "name": "HeidelbergMaterials"
        },
        {
          "sym": "MTX.XETRA",
          "name": "MTU Aero Engines"
        },
        {
          "sym": "DB1.XETRA",
          "name": "Deutsche Boerse AG"
        },
        {
          "sym": "DPW.XETRA",
          "name": "Deutsche Post AG"
        },
        {
          "sym": "EOAN.XETRA",
          "name": "E.ON SE"
        },
        {
          "sym": "IFX.XETRA",
          "name": "Infineon Technologies AG"
        },
        {
          "sym": "LIN.XETRA",
          "name": "Linde PLC"
        },
        {
          "sym": "BEI.XETRA",
          "name": "Beiersdorf AG"
        },
        {
          "sym": "HEN3.XETRA",
          "name": "Henkel AG & Co. KGaA"
        },
        {
          "sym": "CON.XETRA",
          "name": "Continental AG"
        },
        {
          "sym": "DHER.XETRA",
          "name": "Delivery Hero SE"
        },
        {
          "sym": "ZAL.XETRA",
          "name": "Zalando SE"
        }
      ]
    },
    {
      "id": "ftse",
      "label": "🇬🇧 FTSE 100",
      "exchange": "LSE",
      "suffix": ".LSE",
      "currency": "GBP",
      "stocks": [
        {
          "sym": "SHEL.LSE",
          "name": "Shell PLC"
        },
        {
          "sym": "AZN.LSE",
          "name": "AstraZeneca PLC"
        },
        {
          "sym": "HSBA.LSE",
          "name": "HSBC Holdings"
        },
        {
          "sym": "ULVR.LSE",
          "name": "Unilever PLC"
        },
        {
          "sym": "BP.LSE",
          "name": "BP PLC"
        },
        {
          "sym": "GSK.LSE",
          "name": "GSK PLC"
        },
        {
          "sym": "RIO.LSE",
          "name": "Rio Tinto PLC"
        },
        {
          "sym": "DGE.LSE",
          "name": "Diageo PLC"
        },
        {
          "sym": "LSEG.LSE",
          "name": "London Stock Exchange Group"
        },
        {
          "sym": "REL.LSE",
          "name": "RELX PLC"
        },
        {
          "sym": "NG.LSE",
          "name": "National Grid PLC"
        },
        {
          "sym": "CPG.LSE",
          "name": "Compass Group"
        },
        {
          "sym": "LLOY.LSE",
          "name": "Lloyds Banking Group"
        },
        {
          "sym": "BT-A.LSE",
          "name": "BT Group PLC"
        },
        {
          "sym": "VOD.LSE",
          "name": "Vodafone Group PLC"
        },
        {
          "sym": "AAL.LSE",
          "name": "Anglo American PLC"
        },
        {
          "sym": "BARC.LSE",
          "name": "Barclays PLC"
        },
        {
          "sym": "NWG.LSE",
          "name": "NatWest Group PLC"
        },
        {
          "sym": "STAN.LSE",
          "name": "Standard Chartered PLC"
        },
        {
          "sym": "BHP.LSE",
          "name": "BHP Group PLC"
        },
        {
          "sym": "PRU.LSE",
          "name": "Prudential PLC"
        },
        {
          "sym": "AV.LSE",
          "name": "Aviva PLC"
        },
        {
          "sym": "LGEN.LSE",
          "name": "Legal & General Group PLC"
        },
        {
          "sym": "TSCO.LSE",
          "name": "Tesco PLC"
        },
        {
          "sym": "SBRY.LSE",
          "name": "J Sainsbury PLC"
        },
        {
          "sym": "BATS.LSE",
          "name": "British American Tobacco PLC"
        },
        {
          "sym": "IMB.LSE",
          "name": "Imperial Brands PLC"
        },
        {
          "sym": "RKT.LSE",
          "name": "Reckitt Benckiser Group PLC"
        },
        {
          "sym": "WPP.LSE",
          "name": "WPP PLC"
        },
        {
          "sym": "BA.LSE",
          "name": "BAE Systems PLC"
        },
        {
          "sym": "SSE.LSE",
          "name": "SSE PLC"
        },
        {
          "sym": "SGE.LSE",
          "name": "Sage Group PLC"
        }
      ]
    },
    {
      "id": "cac40",
      "label": "🇫🇷 CAC 40",
      "exchange": "EURONEXT PARIS",
      "suffix": ".PA",
      "currency": "EUR",
      "stocks": [
        {
          "sym": "MC.PA",
          "name": "LVMH Moët Hennessy"
        },
        {
          "sym": "TTE.PA",
          "name": "TotalEnergies SE"
        },
        {
          "sym": "SAN.PA",
          "name": "Sanofi SA"
        },
        {
          "sym": "AI.PA",
          "name": "Air Liquide SA"
        },
        {
          "sym": "OR.PA",
          "name": "L'Oréal SA"
        },
        {
          "sym": "BNP.PA",
          "name": "BNP Paribas SA"
        },
        {
          "sym": "DG.PA",
          "name": "Vinci SA"
        },
        {
          "sym": "RI.PA",
          "name": "Pernod Ricard"
        },
        {
          "sym": "CA.PA",
          "name": "Carrefour SA"
        },
        {
          "sym": "ACA.PA",
          "name": "Crédit Agricole SA"
        },
        {
          "sym": "ORA.PA",
          "name": "Orange SA"
        },
        {
          "sym": "DSY.PA",
          "name": "Dassault Systèmes"
        },
        {
          "sym": "KER.PA",
          "name": "Kering SA"
        },
        {
          "sym": "HO.PA",
          "name": "Thales SA"
        },
        {
          "sym": "AIR.PA",
          "name": "Airbus Group SE"
        },
        {
          "sym": "ALO.PA",
          "name": "Alstom S.A."
        },
        {
          "sym": "BN.PA",
          "name": "Danone SA"
        },
        {
          "sym": "CAP.PA",
          "name": "Capgemini SE"
        },
        {
          "sym": "CS.PA",
          "name": "AXA SA"
        },
        {
          "sym": "EL.PA",
          "name": "EssilorLuxottica S. A."
        },
        {
          "sym": "EN.PA",
          "name": "Bouygues SA"
        },
        {
          "sym": "GLE.PA",
          "name": "Societe Generale S.A."
        },
        {
          "sym": "LR.PA",
          "name": "Legrand SA"
        },
        {
          "sym": "ML.PA",
          "name": "Compagnie Generale des Etablissements Michelin SCA"
        },
        {
          "sym": "SU.PA",
          "name": "Schneider Electric S.E."
        }
      ]
    },
    {
      "id": "smi",
      "label": "🇨🇭 SMI SWITZERLAND",
      "exchange": "SIX",
      "suffix": ".SW",
      "currency": "CHF",
      "stocks": [
        {
          "sym": "NESN.SW",
          "name": "Nestlé SA"
        },
        {
          "sym": "ROG.SW",
          "name": "Roche Holding AG"
        },
        {
          "sym": "NOVN.SW",
          "name": "Novartis AG"
        },
        {
          "sym": "ABBN.SW",
          "name": "ABB Ltd."
        },
        {
          "sym": "UBSG.SW",
          "name": "UBS Group AG"
        },
        {
          "sym": "ZURN.SW",
          "name": "Zurich Insurance"
        },
        {
          "sym": "SREN.SW",
          "name": "Swiss Re AG"
        },
        {
          "sym": "SIKA.SW",
          "name": "Sika AG"
        },
        {
          "sym": "GIVN.SW",
          "name": "Givaudan SA"
        },
        {
          "sym": "LONN.SW",
          "name": "Lonza Group AG"
        },
        {
          "sym": "SRENH.SW",
          "name": "Swiss Re AG (Namenakt.)"
        },
        {
          "sym": "SLHN.SW",
          "name": "Swiss Life Holding AG"
        },
        {
          "sym": "ADEN.SW",
          "name": "Adecco Group AG Class N"
        },
        {
          "sym": "BARN.SW",
          "name": "Barry Callebaut AG"
        },
        {
          "sym": "BALN.SW",
          "name": "Baloise Holding AG"
        },
        {
          "sym": "BSKP.SW",
          "name": "Basler Kantonalbank"
        },
        {
          "sym": "FHZN.SW",
          "name": "Flughafen Zurich"
        },
        {
          "sym": "GEBN.SW",
          "name": "Geberit AG"
        },
        {
          "sym": "BAER.SW",
          "name": "Julius Baer Gruppe AG"
        },
        {
          "sym": "PGHN.SW",
          "name": "Partners Group Holding AG"
        },
        {
          "sym": "SCHN.SW",
          "name": "Schindler Holding AG"
        },
        {
          "sym": "SGSN.SW",
          "name": "SGS SA"
        },
        {
          "sym": "SOON.SW",
          "name": "Sonova Holding AG"
        },
        {
          "sym": "UHR.SW",
          "name": "Swatch Group AG"
        },
        {
          "sym": "SCMN.SW",
          "name": "Swisscom AG"
        }
      ]
    },
    {
      "id": "atx",
      "label": "🇦🇹 ATX VIENNA",
      "exchange": "WIEN BÖRSE",
      "suffix": ".VI",
      "currency": "EUR",
      "stocks": [
        {
          "sym": "EBS.VI",
          "name": "Erste Group Bank AG"
        },
        {
          "sym": "OMV.VI",
          "name": "OMV AG"
        },
        {
          "sym": "VER.VI",
          "name": "Verbund AG"
        },
        {
          "sym": "RBI.VI",
          "name": "Raiffeisen Bank Intl."
        },
        {
          "sym": "VOE.VI",
          "name": "voestalpine AG"
        },
        {
          "sym": "ANDR.VI",
          "name": "Andritz AG"
        },
        {
          "sym": "BG.VI",
          "name": "BAWAG Group AG"
        },
        {
          "sym": "EVN.VI",
          "name": "EVN AG"
        },
        {
          "sym": "IIA.VI",
          "name": "Immofinanz AG"
        },
        {
          "sym": "POST.VI",
          "name": "Österreichische Post AG"
        },
        {
          "sym": "ABIN.VI",
          "name": "Anheuser-Busch InBev SA/NV"
        },
        {
          "sym": "ADKO.VI",
          "name": "Addiko Bank AG"
        },
        {
          "sym": "AGR.VI",
          "name": "AGRANA Beteiligungs-Aktiengesellschaft"
        },
        {
          "sym": "AMAG.VI",
          "name": "AMAG Austria Metall AG"
        },
        {
          "sym": "ATS.VI",
          "name": "AT & S Austria Technologie & Systemtechnik Aktiengesellschaft"
        },
        {
          "sym": "BHD.VI",
          "name": "Burgenland Holding Aktiengesellschaft"
        },
        {
          "sym": "BKS.VI",
          "name": "BKS Bank AG"
        },
        {
          "sym": "CAI.VI",
          "name": "CA Immobilien Anlagen AG"
        },
        {
          "sym": "DOC.VI",
          "name": "DO & CO Aktiengesellschaft"
        },
        {
          "sym": "FACC.VI",
          "name": "Facc AG"
        },
        {
          "sym": "FLU.VI",
          "name": "Flughafen Wien Aktiengesellschaft"
        },
        {
          "sym": "LNZ.VI",
          "name": "Lenzing Aktiengesellschaft"
        },
        {
          "sym": "MMK.VI",
          "name": "Mayr-Melnhof Karton AG"
        }
      ]
    },
    {
      "id": "aex",
      "label": "🇳🇱 AEX AMSTERDAM",
      "exchange": "EURONEXT AMS",
      "suffix": ".AS",
      "currency": "EUR",
      "stocks": [
        {
          "sym": "ASML.AS",
          "name": "ASML Holding NV"
        },
        {
          "sym": "INGA.AS",
          "name": "ING Groep NV"
        },
        {
          "sym": "PHIA.AS",
          "name": "Philips NV"
        },
        {
          "sym": "HEIA.AS",
          "name": "Heineken NV"
        },
        {
          "sym": "ABN.AS",
          "name": "ABN AMRO Bank"
        },
        {
          "sym": "AD.AS",
          "name": "Ahold Delhaize"
        },
        {
          "sym": "NN.AS",
          "name": "NN Group NV"
        },
        {
          "sym": "AKZA.AS",
          "name": "Akzo Nobel NV"
        },
        {
          "sym": "WKL.AS",
          "name": "Wolters Kluwer"
        },
        {
          "sym": "URW.AS",
          "name": "Unibail-Rodamco-Westfield"
        },
        {
          "sym": "AALB.AS",
          "name": "Aalberts Industries NV"
        },
        {
          "sym": "ACOMO.AS",
          "name": "Amsterdam Commodities NV"
        },
        {
          "sym": "ADYEN.AS",
          "name": "Adyen NV"
        },
        {
          "sym": "AGN.AS",
          "name": "Aegon NV"
        },
        {
          "sym": "ASMI.AS",
          "name": "ASM International NV"
        },
        {
          "sym": "ASRNL.AS",
          "name": "ASR Nederland NV"
        },
        {
          "sym": "BESI.AS",
          "name": "BE Semiconductor Industries NV"
        },
        {
          "sym": "IMCD.AS",
          "name": "IMCD NV"
        },
        {
          "sym": "KPN.AS",
          "name": "Koninklijke KPN NV"
        },
        {
          "sym": "RAND.AS",
          "name": "Randstad NV"
        },
        {
          "sym": "TKWY.AS",
          "name": "Just Eat Takeaway"
        },
        {
          "sym": "VPK.AS",
          "name": "Koninklijke Vopak NV"
        }
      ]
    },
    {
      "id": "ibex",
      "label": "🇪🇸 IBEX 35 SPAIN",
      "exchange": "BME MADRID",
      "suffix": ".MC",
      "currency": "EUR",
      "stocks": [
        {
          "sym": "SAN.MC",
          "name": "Banco Santander SA"
        },
        {
          "sym": "BBVA.MC",
          "name": "BBVA SA"
        },
        {
          "sym": "ITX.MC",
          "name": "Inditex SA"
        },
        {
          "sym": "IBE.MC",
          "name": "Iberdrola SA"
        },
        {
          "sym": "REP.MC",
          "name": "Repsol SA"
        },
        {
          "sym": "TEF.MC",
          "name": "Telefonica SA"
        },
        {
          "sym": "ACS.MC",
          "name": "ACS Group"
        },
        {
          "sym": "FER.MC",
          "name": "Ferrovial SE"
        },
        {
          "sym": "CABK.MC",
          "name": "CaixaBank SA"
        },
        {
          "sym": "ENG.MC",
          "name": "Enagás SA"
        },
        {
          "sym": "A3M.MC",
          "name": "Atresmedia Corporación de Medios de Comunicación S.A."
        },
        {
          "sym": "ACX.MC",
          "name": "Acerinox"
        },
        {
          "sym": "AENA.MC",
          "name": "Aena SA"
        },
        {
          "sym": "AMS.MC",
          "name": "Amadeus IT Group S.A"
        },
        {
          "sym": "ANA.MC",
          "name": "Acciona"
        },
        {
          "sym": "BKT.MC",
          "name": "Bankinter"
        },
        {
          "sym": "CLNX.MC",
          "name": "Cellnex Telecom SA"
        },
        {
          "sym": "EBRO.MC",
          "name": "Ebro Foods"
        },
        {
          "sym": "ELE.MC",
          "name": "Endesa SA"
        },
        {
          "sym": "GRF.MC",
          "name": "Grifols S.A."
        },
        {
          "sym": "IAG.MC",
          "name": "International Consolidated Airlines Group S.A"
        },
        {
          "sym": "MAP.MC",
          "name": "Mapfre"
        }
      ]
    },
    {
      "id": "omx_stockholm",
      "label": "🇸🇪 OMXS30 STOCKHOLM",
      "exchange": "NASDAQ STOCKHOLM",
      "suffix": ".ST",
      "currency": "SEK",
      "stocks": [
        {
          "sym": "VOLV-B.ST",
          "name": "Volvo AB"
        },
        {
          "sym": "ERIC-B.ST",
          "name": "Ericsson AB"
        },
        {
          "sym": "HM-B.ST",
          "name": "H&M AB"
        },
        {
          "sym": "SEB-A.ST",
          "name": "Skandinaviska Enskilda Banken"
        },
        {
          "sym": "SWED-A.ST",
          "name": "Swedbank AB"
        },
        {
          "sym": "INVE-B.ST",
          "name": "Investor AB"
        },
        {
          "sym": "ABB.ST",
          "name": "ABB Ltd."
        },
        {
          "sym": "ATCO-A.ST",
          "name": "Atlas Copco AB"
        },
        {
          "sym": "ALFA.ST",
          "name": "Alfa Laval AB"
        },
        {
          "sym": "SSAB-A.ST",
          "name": "SSAB AB"
        },
        {
          "sym": "ASSA-B.ST",
          "name": "ASSA ABLOY AB (publ)"
        },
        {
          "sym": "ATCO-B.ST",
          "name": "Atlas Copco AB Series B"
        },
        {
          "sym": "BOL.ST",
          "name": "Boliden AB"
        },
        {
          "sym": "ELUX-A.ST",
          "name": "AB Electrolux (publ)"
        },
        {
          "sym": "ELUX-B.ST",
          "name": "AB Electrolux (publ)"
        },
        {
          "sym": "ERIC-A.ST",
          "name": "Telefonaktiebolaget LM Ericsson (publ)"
        },
        {
          "sym": "HEXA-B.ST",
          "name": "Hexagon AB (publ)"
        },
        {
          "sym": "INVE-A.ST",
          "name": "Investor AB ser. A"
        },
        {
          "sym": "NDA-SE.ST",
          "name": "Nordea Bank Abp"
        },
        {
          "sym": "SEB-C.ST",
          "name": "Skandinaviska Enskilda Banken AB (publ)"
        },
        {
          "sym": "SHB-A.ST",
          "name": "Svenska Handelsbanken AB (publ)"
        },
        {
          "sym": "SHB-B.ST",
          "name": "Svenska Handelsbanken AB (publ)"
        },
        {
          "sym": "SCA-B.ST",
          "name": "Svenska Cellulosa Aktiebolaget SCA (publ)"
        }
      ]
    },
    {
      "id": "omx_copenhagen",
      "label": "🇩🇰 OMXC25 COPENHAGEN",
      "exchange": "NASDAQ COPENHAGEN",
      "suffix": ".CO",
      "currency": "DKK",
      "stocks": [
        {
          "sym": "NOVO-B.CO",
          "name": "Novo Nordisk A/S"
        },
        {
          "sym": "MAERSK-B.CO",
          "name": "A.P. Møller - Maersk"
        },
        {
          "sym": "COLOB.CO",
          "name": "Coloplast A/S"
        },
        {
          "sym": "ORSTED.CO",
          "name": "Ørsted A/S"
        },
        {
          "sym": "GN.CO",
          "name": "GN Store Nord A/S"
        },
        {
          "sym": "DEMANT.CO",
          "name": "Demant A/S"
        },
        {
          "sym": "VWS.CO",
          "name": "Vestas Wind Systems"
        },
        {
          "sym": "CARL-B.CO",
          "name": "Carlsberg A/S"
        },
        {
          "sym": "CHR.CO",
          "name": "Chr. Hansen Holding"
        },
        {
          "sym": "DSV.CO",
          "name": "DSV A/S"
        }
      ]
    },
    {
      "id": "bel20",
      "label": "🇧🇪 BEL 20 BRUSSELS",
      "exchange": "EURONEXT BRUSSELS",
      "suffix": ".BR",
      "currency": "EUR",
      "stocks": [
        {
          "sym": "UCB.BR",
          "name": "UCB SA"
        },
        {
          "sym": "KBC.BR",
          "name": "KBC Group NV"
        },
        {
          "sym": "INGA.BR",
          "name": "ING Groep NV"
        },
        {
          "sym": "COLR.BR",
          "name": "Colruyt Group"
        },
        {
          "sym": "PROX.BR",
          "name": "Proximus Group"
        },
        {
          "sym": "SOLB.BR",
          "name": "Solvay SA"
        },
        {
          "sym": "ACKB.BR",
          "name": "Ackermans & van Haaren"
        },
        {
          "sym": "ABI.BR",
          "name": "AB InBev NV"
        },
        {
          "sym": "AED.BR",
          "name": "Aedifica"
        },
        {
          "sym": "AGS.BR",
          "name": "ageas SA/NV"
        },
        {
          "sym": "ARGX.BR",
          "name": "Argen-X"
        },
        {
          "sym": "BPOST.BR",
          "name": "Bpost NV"
        },
        {
          "sym": "COFB.BR",
          "name": "Cofinimmo SA"
        },
        {
          "sym": "ELI.BR",
          "name": "Elia Group SA/NV"
        },
        {
          "sym": "GBLB.BR",
          "name": "Groep Brussel Lambert NV"
        },
        {
          "sym": "KBCA.BR",
          "name": "KBC Ancora"
        },
        {
          "sym": "MELE.BR",
          "name": "Melexis NV"
        },
        {
          "sym": "ONTEX.BR",
          "name": "Ontex Group NV"
        },
        {
          "sym": "SOF.BR",
          "name": "Sofina Société Anonyme"
        },
        {
          "sym": "TITC.BR",
          "name": "Titan Cement International SA"
        },
        {
          "sym": "UMI.BR",
          "name": "Umicore S.A."
        }
      ]
    },
    {
      "id": "psi",
      "label": "🇵🇹 PSI LISBON",
      "exchange": "EURONEXT LISBON",
      "suffix": ".LS",
      "currency": "EUR",
      "stocks": [
        {
          "sym": "EDP.LS",
          "name": "EDP Energias de Portugal"
        },
        {
          "sym": "EDPR.LS",
          "name": "EDP Renováveis SA"
        },
        {
          "sym": "GALP.LS",
          "name": "Galp Energia SA"
        },
        {
          "sym": "BCP.LS",
          "name": "Banco Comercial Português"
        },
        {
          "sym": "JMT.LS",
          "name": "Jerónimo Martins SGPS"
        },
        {
          "sym": "NOS.LS",
          "name": "NOS SGPS SA"
        },
        {
          "sym": "SON.LS",
          "name": "Sonae SGPS"
        },
        {
          "sym": "ALTR.LS",
          "name": "Altri SGPS SA"
        },
        {
          "sym": "COR.LS",
          "name": "Corticeira Amorim"
        },
        {
          "sym": "CTT.LS",
          "name": "CTT Correios de Portugal SA"
        },
        {
          "sym": "GVOLT.LS",
          "name": "Greenvolt Energias Renovaveis SA"
        },
        {
          "sym": "IBS.LS",
          "name": "Ibersol SGPS"
        },
        {
          "sym": "IPR.LS",
          "name": "Impresa - Sociedade Gestora de Participações Sociais S.A"
        },
        {
          "sym": "NBA.LS",
          "name": "Novabase SGPS"
        },
        {
          "sym": "NVG.LS",
          "name": "The Navigator Company SA"
        },
        {
          "sym": "PHR.LS",
          "name": "Pharol SGPS SA"
        },
        {
          "sym": "RENE.LS",
          "name": "REN - Redes Energéticas Nacionais SGPS S.A"
        },
        {
          "sym": "SEM.LS",
          "name": "Semapa"
        },
        {
          "sym": "SNC.LS",
          "name": "Sonaecom SGPS"
        },
        {
          "sym": "TDSA.LS",
          "name": "Teixeira Duarte"
        }
      ]
    },
    {
      "id": "tsx",
      "label": "🇨🇦 TSX CANADA",
      "exchange": "TORONTO STOCK EXCHANGE",
      "suffix": ".TO",
      "currency": "CAD",
      "stocks": [
        {
          "sym": "RY.TO",
          "name": "Royal Bank of Canada"
        },
        {
          "sym": "TD.TO",
          "name": "Toronto-Dominion Bank"
        },
        {
          "sym": "BNS.TO",
          "name": "Bank of Nova Scotia"
        },
        {
          "sym": "CNR.TO",
          "name": "Canadian National Railway"
        },
        {
          "sym": "CP.TO",
          "name": "Canadian Pacific Kansas City"
        },
        {
          "sym": "SHOP.TO",
          "name": "Shopify Inc."
        },
        {
          "sym": "ENB.TO",
          "name": "Enbridge Inc."
        },
        {
          "sym": "TRI.TO",
          "name": "Thomson Reuters Corp."
        },
        {
          "sym": "MFC.TO",
          "name": "Manulife Financial"
        },
        {
          "sym": "SU.TO",
          "name": "Suncor Energy Inc."
        },
        {
          "sym": "BAM.A.TO",
          "name": "Brookfield Asset Management Inc."
        },
        {
          "sym": "BMO.TO",
          "name": "Bank of Montreal"
        },
        {
          "sym": "BCE.TO",
          "name": "BCE Inc."
        },
        {
          "sym": "CNQ.TO",
          "name": "Canadian Natural Resources Ltd."
        },
        {
          "sym": "TRP.TO",
          "name": "TC Energy Corp."
        },
        {
          "sym": "WCN.TO",
          "name": "Waste Connections Inc."
        },
        {
          "sym": "CSU.TO",
          "name": "Constellation Software Inc."
        },
        {
          "sym": "NTR.TO",
          "name": "Nutrien Ltd."
        },
        {
          "sym": "SLF.TO",
          "name": "Sun Life Financial Inc."
        },
        {
          "sym": "MG.TO",
          "name": "Magna International Inc."
        },
        {
          "sym": "FTS.TO",
          "name": "Fortis Inc."
        }
      ]
    },
    {
      "id": "asx",
      "label": "🇦🇺 ASX AUSTRALIA",
      "exchange": "AUSTRALIAN SECURITIES EXCHANGE",
      "suffix": ".AX",
      "currency": "AUD",
      "stocks": [
        {
          "sym": "BHP.AX",
          "name": "BHP Group Ltd."
        },
        {
          "sym": "CBA.AX",
          "name": "Commonwealth Bank of Australia"
        },
        {
          "sym": "CSL.AX",
          "name": "CSL Ltd."
        },
        {
          "sym": "ANZ.AX",
          "name": "ANZ Group Holdings"
        },
        {
          "sym": "WBC.AX",
          "name": "Westpac Banking Corp."
        },
        {
          "sym": "NAB.AX",
          "name": "National Australia Bank"
        },
        {
          "sym": "RIO.AX",
          "name": "Rio Tinto Ltd."
        },
        {
          "sym": "WDS.AX",
          "name": "Woodside Energy Group"
        },
        {
          "sym": "MQG.AX",
          "name": "Macquarie Group Ltd."
        },
        {
          "sym": "WES.AX",
          "name": "Wesfarmers Ltd."
        },
        {
          "sym": "WOW.AX",
          "name": "Woolworths Group Ltd"
        },
        {
          "sym": "FMG.AX",
          "name": "Fortescue Ltd"
        },
        {
          "sym": "GMG.AX",
          "name": "Goodman Group"
        },
        {
          "sym": "TCL.AX",
          "name": "Transurban Group"
        },
        {
          "sym": "REA.AX",
          "name": "REA Group Ltd"
        },
        {
          "sym": "ALL.AX",
          "name": "Aristocrat Leisure Ltd"
        },
        {
          "sym": "COH.AX",
          "name": "Cochlear Ltd"
        },
        {
          "sym": "S32.AX",
          "name": "South32 Ltd"
        },
        {
          "sym": "STO.AX",
          "name": "Santos Ltd"
        },
        {
          "sym": "ORG.AX",
          "name": "Origin Energy Ltd"
        },
        {
          "sym": "MIN.AX",
          "name": "Mineral Resources Ltd"
        },
        {
          "sym": "NCM.AX",
          "name": "Newmont Corporation"
        },
        {
          "sym": "QAN.AX",
          "name": "Qantas Airways Ltd"
        },
        {
          "sym": "SHL.AX",
          "name": "Sonic Healthcare Ltd"
        },
        {
          "sym": "ASX.AX",
          "name": "ASX Limited"
        },
        {
          "sym": "CPU.AX",
          "name": "Computershare Ltd"
        },
        {
          "sym": "AMP.AX",
          "name": "AMP Limited"
        },
        {
          "sym": "QBE.AX",
          "name": "QBE Insurance Group Ltd"
        },
        {
          "sym": "IAG.AX",
          "name": "Insurance Australia Group Ltd"
        },
        {
          "sym": "AGL.AX",
          "name": "AGL Energy Ltd"
        }
      ]
    },
    {
      "id": "bovespa",
      "label": "🇧🇷 BOVESPA BRAZIL",
      "exchange": "B3 — BRASIL BOLSA BALCÃO",
      "suffix": ".SA",
      "currency": "BRL",
      "stocks": [
        {
          "sym": "PETR4.SA",
          "name": "Petrobras SA"
        },
        {
          "sym": "VALE3.SA",
          "name": "Vale SA"
        },
        {
          "sym": "ITUB4.SA",
          "name": "Itaú Unibanco Holding"
        },
        {
          "sym": "BBDC4.SA",
          "name": "Banco Bradesco SA"
        },
        {
          "sym": "ABEV3.SA",
          "name": "Ambev SA"
        },
        {
          "sym": "B3SA3.SA",
          "name": "B3 SA"
        },
        {
          "sym": "WEGE3.SA",
          "name": "Weg SA"
        },
        {
          "sym": "BBAS3.SA",
          "name": "Banco do Brasil SA"
        },
        {
          "sym": "SUZB3.SA",
          "name": "Suzano SA"
        },
        {
          "sym": "JBSS3.SA",
          "name": "JBS SA"
        },
        {
          "sym": "BBDC3.SA",
          "name": "Banco Bradesco S.A."
        },
        {
          "sym": "BBSE3.SA",
          "name": "BB Seguridade Participacoes SA"
        },
        {
          "sym": "BRFS3.SA",
          "name": "BRF S.A."
        },
        {
          "sym": "CSAN3.SA",
          "name": "Cosan S.A."
        },
        {
          "sym": "ELET3.SA",
          "name": "Centrais Elétricas Brasileiras S.A. - Eletrobrás"
        },
        {
          "sym": "ELET6.SA",
          "name": "Centrais Elétricas Brasileiras S.A. - Eletrobrás"
        },
        {
          "sym": "GGBR4.SA",
          "name": "Gerdau S.A."
        },
        {
          "sym": "KLBN11.SA",
          "name": "Klabin S.A."
        },
        {
          "sym": "PETR3.SA",
          "name": "Petróleo Brasileiro S.A. - Petrobras"
        },
        {
          "sym": "SBSP3.SA",
          "name": "Companhia de Saneamento Básico do Estado de São Paulo - SABESP"
        },
        {
          "sym": "VIVT3.SA",
          "name": "Telefônica Brasil S.A."
        }
      ]
    },
    {
      "id": "bmv",
      "label": "🇲🇽 IPC MEXICO",
      "exchange": "BOLSA MEXICANA DE VALORES",
      "suffix": ".MX",
      "currency": "MXN",
      "stocks": [
        {
          "sym": "AMXL.MX",
          "name": "América Móvil SAB"
        },
        {
          "sym": "WALMEX.MX",
          "name": "Walmart de México"
        },
        {
          "sym": "GMEXICOB.MX",
          "name": "Grupo México SAB"
        },
        {
          "sym": "TLEVISACPO.MX",
          "name": "Grupo Televisa SAB"
        },
        {
          "sym": "FEMSAUBD.MX",
          "name": "FEMSA SAB"
        },
        {
          "sym": "GFNORTEO.MX",
          "name": "Grupo Financiero Banorte"
        },
        {
          "sym": "BIMBOA.MX",
          "name": "Grupo Bimbo SAB"
        },
        {
          "sym": "CEMEXCPO.MX",
          "name": "CEMEX SAB"
        },
        {
          "sym": "AMXB",
          "name": "America Movil SAB de CV"
        },
        {
          "sym": "BIMBOA",
          "name": "Grupo Bimbo S.A.B. de C.V"
        },
        {
          "sym": "GAPB",
          "name": "Grupo Aeroportuario del Pacifico S.A.B. de C.V"
        },
        {
          "sym": "GCARSOA1",
          "name": "Grupo Carso S.A.B. de C.V"
        },
        {
          "sym": "ELEKTRA",
          "name": "Grupo Elektra S.A.B. de C.V"
        },
        {
          "sym": "CEMEXCPO",
          "name": "Cemex S.A.B. de C.V"
        },
        {
          "sym": "GFNORTEO",
          "name": "Grupo Financiero Banorte S.A.B. de C.V"
        },
        {
          "sym": "ASURB",
          "name": "Grupo Aeroportuario del Sureste S.A.B. de C.V"
        },
        {
          "sym": "GFINBURO",
          "name": "Grupo Financiero Inbursa S.A.B. de C.V"
        },
        {
          "sym": "GMEXICOB",
          "name": "Grupo México S.A.B. de C.V"
        },
        {
          "sym": "WALMEX",
          "name": "Wal-Mart de México S.A.B. de C.V"
        },
        {
          "sym": "FEMSAUB",
          "name": "Fomento Económico Mexicano S.A.B. de C.V"
        },
        {
          "sym": "ALFAA",
          "name": "Alfa S.A.B. de C.V"
        },
        {
          "sym": "AC",
          "name": "Arca Continental S.A.B. de C.V"
        },
        {
          "sym": "CUERVO",
          "name": "Becle S.A.B. de C.V"
        },
        {
          "sym": "CHDRAUIB",
          "name": "Grupo Comercial Chedraui S.A.B. de C.V"
        },
        {
          "sym": "KIMBERA",
          "name": "Kimberly-Clark de México S. A. B. de C. V"
        },
        {
          "sym": "SORIANAB",
          "name": "Organización Soriana S. A. B. de C. V"
        },
        {
          "sym": "VOLARA",
          "name": "Controladora Vuela Compañía de Aviación S.A.B. de C.V"
        },
        {
          "sym": "OMAB",
          "name": "Grupo Aeroportuario del Centro Norte S.A.B. de C.V"
        }
      ]
    },
    {
      "id": "wse",
      "label": "🇵🇱 WIG20 WARSAW",
      "exchange": "WARSAW STOCK EXCHANGE",
      "suffix": ".WAR",
      "currency": "PLN",
      "stocks": [
        {
          "sym": "PKN.WAR",
          "name": "PKN Orlen SA"
        },
        {
          "sym": "PKO.WAR",
          "name": "PKO Bank Polski"
        },
        {
          "sym": "PZU.WAR",
          "name": "PZU SA"
        },
        {
          "sym": "PGE.WAR",
          "name": "Polska Grupa Energetyczna"
        },
        {
          "sym": "KGH.WAR",
          "name": "KGHM Polska Miedź"
        },
        {
          "sym": "CDR.WAR",
          "name": "CD Projekt SA"
        },
        {
          "sym": "LPP.WAR",
          "name": "LPP SA"
        },
        {
          "sym": "DNP.WAR",
          "name": "Dino Polska SA"
        },
        {
          "sym": "11B.WAR",
          "name": "11 bit studios S.A"
        },
        {
          "sym": "1AT.WAR",
          "name": "Atal SA"
        },
        {
          "sym": "4MS.WAR",
          "name": "4Mass SA"
        },
        {
          "sym": "ALE.WAR",
          "name": "Allegro.eu S.A."
        },
        {
          "sym": "ALR.WAR",
          "name": "Alior Bank S.A."
        },
        {
          "sym": "AMC.WAR",
          "name": "Amica S.A."
        },
        {
          "sym": "APT.WAR",
          "name": "Apator S.A."
        },
        {
          "sym": "ASB.WAR",
          "name": "ASBISc Enterprises PLC"
        },
        {
          "sym": "CPS.WAR",
          "name": "Cyfrowy Polsat SA"
        },
        {
          "sym": "JSW.WAR",
          "name": "Jastrzebska Spotka Weglowa SA"
        },
        {
          "sym": "MBK.WAR",
          "name": "mBank SA"
        },
        {
          "sym": "SAN.WAR",
          "name": "Banco Santander S.A."
        },
        {
          "sym": "XTB.WAR",
          "name": "X Trade Brokers Dom Maklerski SA"
        }
      ]
    },
    {
      "id": "jse",
      "label": "🇿🇦 JSE SOUTH AFRICA",
      "exchange": "JOHANNESBURG STOCK EXCHANGE",
      "suffix": ".JSE",
      "currency": "ZAR",
      "stocks": [
        {
          "sym": "NPN.JSE",
          "name": "Naspers Ltd."
        },
        {
          "sym": "BTI.JSE",
          "name": "British American Tobacco"
        },
        {
          "sym": "BHP.JSE",
          "name": "BHP Group (SA Listing)"
        },
        {
          "sym": "MTN.JSE",
          "name": "MTN Group Ltd."
        },
        {
          "sym": "SOL.JSE",
          "name": "Sasol Ltd."
        },
        {
          "sym": "GFI.JSE",
          "name": "Gold Fields Ltd."
        },
        {
          "sym": "AGL.JSE",
          "name": "Anglo American (SA)"
        },
        {
          "sym": "SBK.JSE",
          "name": "Standard Bank Group"
        },
        {
          "sym": "AMS.JSE",
          "name": "Anglo American Platinum Ltd"
        },
        {
          "sym": "ANG.JSE",
          "name": "AngloGold Ashanti Ltd"
        },
        {
          "sym": "BHG.JSE",
          "name": "BHP Group Limited"
        },
        {
          "sym": "EXX.JSE",
          "name": "Exxaro Resources Ltd"
        },
        {
          "sym": "GLN.JSE",
          "name": "Glencore PLC"
        },
        {
          "sym": "HAR.JSE",
          "name": "Harmony Gold Mining Co. Ltd."
        },
        {
          "sym": "IMP.JSE",
          "name": "Impala Platinum Holdings Ltd"
        },
        {
          "sym": "KIO.JSE",
          "name": "Kumba Iron Ore Ltd"
        },
        {
          "sym": "MUR.JSE",
          "name": "Murray & Roberts Holdings Ltd"
        },
        {
          "sym": "NPH.JSE",
          "name": "Northam Platinum Holdings Ltd"
        },
        {
          "sym": "PAN.JSE",
          "name": "Pan African Resources PLC"
        },
        {
          "sym": "RBX.JSE",
          "name": "Raubex Group Ltd"
        },
        {
          "sym": "RCL.JSE",
          "name": "RCL Foods Ltd"
        },
        {
          "sym": "SAP.JSE",
          "name": "Sappi Ltd"
        },
        {
          "sym": "S32.JSE",
          "name": "South32 Ltd"
        },
        {
          "sym": "SSW.JSE",
          "name": "Sibanye Stillwater Ltd"
        },
        {
          "sym": "TGA.JSE",
          "name": "Thungela Resources Limited"
        }
      ]
    },
    {
      "id": "tase",
      "label": "🇮🇱 TASE ISRAEL",
      "exchange": "TEL AVIV STOCK EXCHANGE",
      "suffix": ".TA",
      "currency": "ILS",
      "stocks": [
        {
          "sym": "TEVA.TA",
          "name": "Teva Pharmaceutical"
        },
        {
          "sym": "CHKP.TA",
          "name": "Check Point Software"
        },
        {
          "sym": "ICL.TA",
          "name": "ICL Group Ltd."
        },
        {
          "sym": "NICE.TA",
          "name": "NICE Systems Ltd."
        },
        {
          "sym": "ESLT.TA",
          "name": "Elbit Systems Ltd."
        },
        {
          "sym": "AURA.TA",
          "name": "Aura Investments"
        },
        {
          "sym": "PERI.TA",
          "name": "Perion Network"
        },
        {
          "sym": "5117700.TA",
          "name": "Ayalon Money Market Il"
        },
        {
          "sym": "ACCL.TA",
          "name": "Accel Solutions Group Ltd"
        },
        {
          "sym": "ACKR.TA",
          "name": "Ackerstein Group Ltd"
        },
        {
          "sym": "AFRE.TA",
          "name": "Africa Israel Residences Ltd"
        },
        {
          "sym": "ALBA.TA",
          "name": "Al-Bad Massuot Yitzhak Ltd"
        },
        {
          "sym": "ALHE.TA",
          "name": "Alony Hetz Properties and Investments Ltd"
        },
        {
          "sym": "AMOT.TA",
          "name": "Amot Investments Ltd"
        },
        {
          "sym": "ANLT.TA",
          "name": "Analyst IMS Investment Management Services Ltd"
        },
        {
          "sym": "APLY.TA",
          "name": "Aerodrome Group Ltd"
        },
        {
          "sym": "ARAD.TA",
          "name": "Arad Ltd"
        },
        {
          "sym": "ASHG.TA",
          "name": "Ashtrom Group Ltd"
        },
        {
          "sym": "AUDC.TA",
          "name": "AudioCodes Ltd"
        },
        {
          "sym": "BEZQ.TA",
          "name": "Bezeq Israeli Telecommunication Corp Ltd"
        },
        {
          "sym": "BVC.TA",
          "name": "Batm Advanced Communications Ltd"
        },
        {
          "sym": "CAMT.TA",
          "name": "Camtek Ltd"
        },
        {
          "sym": "DLEKG.TA",
          "name": "Delek Group"
        },
        {
          "sym": "DSCT.TA",
          "name": "Israel Discount Bank Ltd"
        },
        {
          "sym": "ECL.TA",
          "name": "Elco Ltd"
        },
        {
          "sym": "ELRN.TA",
          "name": "Elron Electronic Industries Ltd"
        }
      ]
    },
    {
      "id": "borsa_istanbul",
      "label": "🇹🇷 BIST100 ISTANBUL",
      "exchange": "BORSA ISTANBUL",
      "suffix": ".IS",
      "currency": "TRY",
      "stocks": [
        {
          "sym": "GARAN.IS",
          "name": "Garanti Bankası"
        },
        {
          "sym": "AKBNK.IS",
          "name": "Akbank TAS"
        },
        {
          "sym": "ISCTR.IS",
          "name": "İş Bankası"
        },
        {
          "sym": "EREGL.IS",
          "name": "Ereğli Demir Çelik"
        },
        {
          "sym": "THYAO.IS",
          "name": "Türk Hava Yolları"
        },
        {
          "sym": "TOASO.IS",
          "name": "Tofaş Türk Otomobil"
        },
        {
          "sym": "SASA.IS",
          "name": "SASA Polyester"
        },
        {
          "sym": "SAHOL.IS",
          "name": "Hacı Ömer Sabancı Holding"
        },
        {
          "sym": "AKBNK",
          "name": "Akbank TAS"
        },
        {
          "sym": "ARCLK",
          "name": "Arcelik AS"
        },
        {
          "sym": "ASELS",
          "name": "Aselsan Elektronik Sanayi ve Ticaret AS"
        },
        {
          "sym": "BIMAS",
          "name": "Bim Birlesik Magazalar AS"
        },
        {
          "sym": "CCOLA",
          "name": "Coca-Cola Icecek AS"
        },
        {
          "sym": "EKGYO",
          "name": "Emlak Konut Gayrimenkul Yatirim Ortakligi AS"
        },
        {
          "sym": "EREGL",
          "name": "Eregli Demir ve Celik Fabrikalari TAS"
        },
        {
          "sym": "FROTO",
          "name": "Ford Otomotiv Sanayi AS"
        },
        {
          "sym": "SAHOL",
          "name": "Haci Omer Sabanci Holding AS"
        },
        {
          "sym": "KOZAL",
          "name": "Koza Altin Isletmeleri AS"
        },
        {
          "sym": "KCHOL",
          "name": "Koc Holding AS"
        },
        {
          "sym": "PETKM",
          "name": "Petkim Petrokimya Holding AS"
        },
        {
          "sym": "SASA",
          "name": "Sasa Polyester Sanayi AS"
        },
        {
          "sym": "TAVHL",
          "name": "TAV Havalimanlari Holding"
        },
        {
          "sym": "TKFEN",
          "name": "Tekfen Holding AS"
        },
        {
          "sym": "TCELL",
          "name": "Turkcell Iletisim Hizmetleri AS"
        },
        {
          "sym": "THYAO",
          "name": "Turkish Airlines"
        },
        {
          "sym": "GARAN",
          "name": "Turkiye Garanti Bankasi A.S."
        },
        {
          "sym": "ISCTR",
          "name": "Turkiye Is Bankasi AS Class C"
        },
        {
          "sym": "TUPRS",
          "name": "Turkiye Petrol Rafinerileri AS"
        }
      ]
    },
    {
      "id": "crypto",
      "label": "₿ CRYPTO TOP 10",
      "exchange": "GLOBAL",
      "suffix": ".cc",
      "currency": "USD",
      "stocks": [
        {
          "sym": "BTC-USD.cc",
          "name": "Bitcoin"
        },
        {
          "sym": "ETH-USD.cc",
          "name": "Ethereum"
        },
        {
          "sym": "BNB-USD.cc",
          "name": "BNB"
        },
        {
          "sym": "SOL-USD.cc",
          "name": "Solana"
        },
        {
          "sym": "XRP-USD.cc",
          "name": "XRP"
        },
        {
          "sym": "DOGE-USD.cc",
          "name": "Dogecoin"
        },
        {
          "sym": "ADA-USD.cc",
          "name": "Cardano"
        },
        {
          "sym": "DOT-USD.cc",
          "name": "Polkadot"
        },
        {
          "sym": "LINK-USD.cc",
          "name": "Chainlink"
        },
        {
          "sym": "LTC-USD.cc",
          "name": "Litecoin"
        }
      ]
    },
    {
      "id": "zse",
      "label": "🇭🇷 ZSE ZAGREB",
      "exchange": "ZAGREB STOCK EXCHANGE",
      "suffix": ".ZSE",
      "currency": "EUR",
      "stocks": [
        {
          "sym": "HT.ZSE",
          "name": "Hrvatski Telekom d.d."
        },
        {
          "sym": "INA.ZSE",
          "name": "INA-Industrija Nafte d.d."
        },
        {
          "sym": "KOEI.ZSE",
          "name": "Koncar-Elektroindustrija d.d."
        },
        {
          "sym": "ATGR.ZSE",
          "name": "Atlantic Grupa d.d."
        },
        {
          "sym": "PODR.ZSE",
          "name": "Podravka d.d."
        },
        {
          "sym": "ADRS.ZSE",
          "name": "Adris Grupa d.d."
        },
        {
          "sym": "ERNT.ZSE",
          "name": "Ericsson Nikola Tesla d.d."
        },
        {
          "sym": "HPB.ZSE",
          "name": "Hrvatska Postanska Banka d.d."
        },
        {
          "sym": "JNAF.ZSE",
          "name": "Janaf d.d."
        },
        {
          "sym": "KRAS.ZSE",
          "name": "Kras d.d."
        },
        {
          "sym": "MAIS.ZSE",
          "name": "Maistra d.d."
        },
        {
          "sym": "ARNT.ZSE",
          "name": "Arena Hospitality Group d.d."
        },
        {
          "sym": "ATPL.ZSE",
          "name": "Atlantska Plovidba d.d."
        },
        {
          "sym": "DLKV.ZSE",
          "name": "Dalekovod d.d."
        },
        {
          "sym": "ADPL.ZSE",
          "name": "AD Plastik d.d."
        },
        {
          "sym": "JDPL.ZSE",
          "name": "Jadroplov d.d."
        },
        {
          "sym": "IGH.ZSE",
          "name": "Institut IGH d.d."
        },
        {
          "sym": "INGR.ZSE",
          "name": "Ingra d.d."
        },
        {
          "sym": "ADRS2.ZSE",
          "name": "Adris Grupa d.d. Pfd."
        },
        {
          "sym": "DDJH.ZSE",
          "name": "Djuro Djakovic Grupa d.d."
        },
        {
          "sym": "RIVP.ZSE",
          "name": "Valamar Riviera d.d."
        },
        {
          "sym": "ZABA.ZSE",
          "name": "Zagrebacka Banka d.d."
        }
      ]
    },
    {
      "id": "athex",
      "label": "🇬🇷 ATHEX ATHENS",
      "exchange": "ATHENS STOCK EXCHANGE",
      "suffix": ".AT",
      "currency": "EUR",
      "stocks": [
        {
          "sym": "ALPHA.AT",
          "name": "Alpha Services and Holdings S.A."
        },
        {
          "sym": "EUROB.AT",
          "name": "Eurobank Ergasias S.A."
        },
        {
          "sym": "ETE.AT",
          "name": "National Bank of Greece S.A."
        },
        {
          "sym": "PPC.AT",
          "name": "Public Power Corporation S.A."
        },
        {
          "sym": "MYTIL.AT",
          "name": "Mytilineos S.A."
        },
        {
          "sym": "OPAP.AT",
          "name": "OPAP S.A."
        },
        {
          "sym": "HTO.AT",
          "name": "Hellenic Telecommunications (OTE) S.A."
        },
        {
          "sym": "MOH.AT",
          "name": "Motor Oil (Hellas) S.A."
        },
        {
          "sym": "ELPE.AT",
          "name": "Hellenic Petroleum S.A."
        },
        {
          "sym": "TITC.AT",
          "name": "Titan Cement International S.A."
        },
        {
          "sym": "EXAE.AT",
          "name": "Hellenic Exchanges - Athens SE S.A."
        },
        {
          "sym": "GEKTERNA.AT",
          "name": "GEK TERNA Holdings S.A."
        },
        {
          "sym": "ELHA.AT",
          "name": "Elvalhalcor S.A."
        },
        {
          "sym": "LAMDA.AT",
          "name": "LAMDA Development S.A."
        },
        {
          "sym": "ADMIE.AT",
          "name": "ADMIE Holding S.A."
        },
        {
          "sym": "SAR.AT",
          "name": "Gr. Sarantis S.A."
        },
        {
          "sym": "VIO.AT",
          "name": "Viohalco S.A."
        },
        {
          "sym": "CENER.AT",
          "name": "Cenergy Holdings S.A."
        },
        {
          "sym": "AVAX.AT",
          "name": "Avax S.A."
        },
        {
          "sym": "FOYRK.AT",
          "name": "Fourlis Holdings S.A."
        }
      ]
    },
    {
      "id": "bcba",
      "label": "🇦🇷 BCBA BUENOS AIRES",
      "exchange": "BOLSA DE COMERCIO DE BUENOS AIRES",
      "suffix": ".BA",
      "currency": "ARS",
      "stocks": [
        {
          "sym": "GGAL.BA",
          "name": "Grupo Financiero Galicia S.A."
        },
        {
          "sym": "YPF.BA",
          "name": "YPF S.A."
        },
        {
          "sym": "PAMP.BA",
          "name": "Pampa Energia S.A."
        },
        {
          "sym": "BMA.BA",
          "name": "Banco Macro S.A."
        },
        {
          "sym": "BBAR.BA",
          "name": "BBVA Banco Frances S.A."
        },
        {
          "sym": "CEPU.BA",
          "name": "Central Puerto S.A."
        },
        {
          "sym": "TECO2.BA",
          "name": "Telecom Argentina S.A."
        },
        {
          "sym": "CRES.BA",
          "name": "Cresud S.A."
        },
        {
          "sym": "LOMA.BA",
          "name": "Loma Negra S.A."
        },
        {
          "sym": "MELI.BA",
          "name": "MercadoLibre Inc."
        },
        {
          "sym": "ALUA.BA",
          "name": "Aluar Aluminio Argentino S.A."
        },
        {
          "sym": "AGRO.BA",
          "name": "Agrometal S.A.I."
        },
        {
          "sym": "EDN.BA",
          "name": "Empresa Distribuidora Norte S.A."
        },
        {
          "sym": "SUPV.BA",
          "name": "Grupo Supervielle S.A."
        },
        {
          "sym": "BYMA.BA",
          "name": "Bolsas y Mercados Argentinos S.A."
        },
        {
          "sym": "CVH.BA",
          "name": "Cablevision Holding S.A."
        },
        {
          "sym": "BHIP.BA",
          "name": "Banco Hipotecario S.A."
        },
        {
          "sym": "COME.BA",
          "name": "Sociedad Comercial del Plata S.A."
        },
        {
          "sym": "AAPL.BA",
          "name": "Apple Inc DRC"
        },
        {
          "sym": "BABA.BA",
          "name": "Alibaba Group Holding Limited"
        },
        {
          "sym": "YPFD.BA",
          "name": "YPF S.A. D"
        }
      ]
    },
    {
      "id": "ise",
      "label": "🇮🇪 EURONEXT DUBLIN",
      "exchange": "EURONEXT DUBLIN",
      "suffix": ".IR",
      "currency": "EUR",
      "stocks": [
        {
          "sym": "BIRG.IR",
          "name": "Bank of Ireland Group PLC"
        },
        {
          "sym": "A5G.IR",
          "name": "AIB Group PLC"
        },
        {
          "sym": "KRX.IR",
          "name": "Kingspan Group PLC"
        },
        {
          "sym": "KRZ.IR",
          "name": "Kerry Group PLC"
        },
        {
          "sym": "GL9.IR",
          "name": "Glanbia PLC"
        },
        {
          "sym": "CRH.IR",
          "name": "CRH PLC"
        },
        {
          "sym": "RI5.IR",
          "name": "Ryanair Holdings PLC"
        },
        {
          "sym": "IR5B.IR",
          "name": "Irish Continental Group PLC"
        },
        {
          "sym": "GVR.IR",
          "name": "Glenveagh Properties PLC"
        },
        {
          "sym": "DHG.IR",
          "name": "Dalata Hotel Group PLC"
        },
        {
          "sym": "C5H.IR",
          "name": "Cairn Homes PLC"
        },
        {
          "sym": "IRES.IR",
          "name": "Irish Residential Properties REIT"
        },
        {
          "sym": "GRP.IR",
          "name": "Greencoat Renewables PLC"
        },
        {
          "sym": "KMR.IR",
          "name": "Kenmare Resources PLC"
        },
        {
          "sym": "HSW.IR",
          "name": "Hostelworld Group PLC"
        },
        {
          "sym": "8GW.IR",
          "name": "Great Western Mining Corp Plc"
        },
        {
          "sym": "CORRE.IR",
          "name": "Corre Energy BV"
        },
        {
          "sym": "DLE.IR",
          "name": "Datalex"
        },
        {
          "sym": "DQ7A.IR",
          "name": "Donegal Investment Group PLC"
        },
        {
          "sym": "EG7.IR",
          "name": "FBD Holdings PLC"
        },
        {
          "sym": "GRW.IR",
          "name": "Draper Esprit plc"
        },
        {
          "sym": "GYQ.IR",
          "name": "FD Technologies PLC"
        },
        {
          "sym": "MIO.IR",
          "name": "Mincon Group P"
        },
        {
          "sym": "MLC.IR",
          "name": "Malin Corporation plc"
        },
        {
          "sym": "OIZ.IR",
          "name": "Origin Enterprises Plc"
        },
        {
          "sym": "OVXA.IR",
          "name": "Ovoca Gold PLC"
        },
        {
          "sym": "PTSB.IR",
          "name": "PERMANENT TSB GROUP HOLDINGS PLC"
        },
        {
          "sym": "RYA.IR",
          "name": "Ryanair Holdings plc"
        },
        {
          "sym": "UPR.IR",
          "name": "Uniphar Group PLC"
        }
      ]
    },
    {
      "id": "pse",
      "label": "🇵🇭 PSE PHILIPPINES",
      "exchange": "PHILIPPINE STOCK EXCHANGE",
      "suffix": ".PSE",
      "currency": "PHP",
      "stocks": [
        {
          "sym": "SM.PSE",
          "name": "SM Investments Corp"
        },
        {
          "sym": "ALI.PSE",
          "name": "Ayala Land Inc"
        },
        {
          "sym": "AC.PSE",
          "name": "Ayala Corporation"
        },
        {
          "sym": "BDO.PSE",
          "name": "BDO Unibank Inc"
        },
        {
          "sym": "BPI.PSE",
          "name": "Bank of the Philippine Islands"
        },
        {
          "sym": "MER.PSE",
          "name": "Manila Electric Co"
        },
        {
          "sym": "TEL.PSE",
          "name": "PLDT Inc"
        },
        {
          "sym": "GLO.PSE",
          "name": "Globe Telecom Inc"
        },
        {
          "sym": "JFC.PSE",
          "name": "Jollibee Foods Corp"
        },
        {
          "sym": "SMC.PSE",
          "name": "San Miguel Corp"
        },
        {
          "sym": "SMPH.PSE",
          "name": "SM Prime Holdings Inc"
        },
        {
          "sym": "MBT.PSE",
          "name": "Metropolitan Bank & Trust Co"
        },
        {
          "sym": "ICT.PSE",
          "name": "International Container Terminal Services"
        },
        {
          "sym": "URC.PSE",
          "name": "Universal Robina Corp"
        },
        {
          "sym": "RLC.PSE",
          "name": "Robinsons Land Corp"
        },
        {
          "sym": "PGOLD.PSE",
          "name": "Puregold Price Club Inc"
        },
        {
          "sym": "MEG.PSE",
          "name": "Megaworld Corp"
        },
        {
          "sym": "SCC.PSE",
          "name": "Semirara Mining Corp"
        },
        {
          "sym": "RRHI.PSE",
          "name": "Robinsons Retail Holdings Inc"
        },
        {
          "sym": "LTG.PSE",
          "name": "LT Group Inc"
        }
      ]
    },
    {
      "id": "sse",
      "label": "🇨🇳 SSE SHANGHAI",
      "exchange": "SHANGHAI STOCK EXCHANGE",
      "suffix": ".SHG",
      "currency": "CNY",
      "stocks": [
        {
          "sym": "600519.SHG",
          "name": "Kweichow Moutai Co Ltd"
        },
        {
          "sym": "601318.SHG",
          "name": "Ping An Insurance Group"
        },
        {
          "sym": "601857.SHG",
          "name": "PetroChina Co Ltd"
        },
        {
          "sym": "601398.SHG",
          "name": "Industrial and Commercial Bank of China"
        },
        {
          "sym": "601288.SHG",
          "name": "Agricultural Bank of China"
        },
        {
          "sym": "600036.SHG",
          "name": "China Merchants Bank"
        },
        {
          "sym": "601088.SHG",
          "name": "China Shenhua Energy Co Ltd"
        },
        {
          "sym": "601668.SHG",
          "name": "China State Construction Engineering"
        },
        {
          "sym": "601601.SHG",
          "name": "China Pacific Insurance"
        },
        {
          "sym": "601628.SHG",
          "name": "China Life Insurance"
        },
        {
          "sym": "600030.SHG",
          "name": "CITIC Securities"
        },
        {
          "sym": "600104.SHG",
          "name": "SAIC Motor Corporation"
        },
        {
          "sym": "600887.SHG",
          "name": "Yili Group"
        },
        {
          "sym": "600276.SHG",
          "name": "Jiangsu Hengrui Medicine"
        },
        {
          "sym": "600690.SHG",
          "name": "Haier Smart Home"
        },
        {
          "sym": "601766.SHG",
          "name": "CRRC Corporation"
        },
        {
          "sym": "601888.SHG",
          "name": "China International Travel Service"
        },
        {
          "sym": "600837.SHG",
          "name": "Haitong Securities"
        },
        {
          "sym": "601336.SHG",
          "name": "New China Life Insurance"
        }
      ]
    },
    {
      "id": "twse",
      "label": "🇹🇼 TWSE TAIWAN",
      "exchange": "TAIWAN STOCK EXCHANGE",
      "suffix": ".TW",
      "currency": "TWD",
      "stocks": [
        {
          "sym": "2330.TW",
          "name": "Taiwan Semiconductor Manufacturing (TSMC)"
        },
        {
          "sym": "2317.TW",
          "name": "Hon Hai Precision Industry (Foxconn)"
        },
        {
          "sym": "2454.TW",
          "name": "MediaTek Inc"
        },
        {
          "sym": "2882.TW",
          "name": "Cathay Financial Holding Co Ltd"
        },
        {
          "sym": "2881.TW",
          "name": "Fubon Financial Holding Co Ltd"
        },
        {
          "sym": "2412.TW",
          "name": "Chunghwa Telecom Co Ltd"
        },
        {
          "sym": "1303.TW",
          "name": "Nan Ya Plastics Corp"
        },
        {
          "sym": "1301.TW",
          "name": "Formosa Plastics Corp"
        },
        {
          "sym": "2891.TW",
          "name": "CTBC Financial Holding Co Ltd"
        },
        {
          "sym": "2303.TW",
          "name": "United Microelectronics Corporation"
        },
        {
          "sym": "2002.TW",
          "name": "China Steel Corp"
        },
        {
          "sym": "2886.TW",
          "name": "Mega Financial Holding Co Ltd"
        },
        {
          "sym": "6505.TW",
          "name": "Formosa Petrochemical Corp"
        },
        {
          "sym": "2884.TW",
          "name": "E.SUN Financial Holding Co Ltd"
        },
        {
          "sym": "3711.TW",
          "name": "ASE Technology Holding Co Ltd"
        },
        {
          "sym": "2308.TW",
          "name": "Delta Electronics Inc"
        },
        {
          "sym": "2382.TW",
          "name": "Quanta Computer Inc"
        },
        {
          "sym": "2395.TW",
          "name": "Advantech Co Ltd"
        },
        {
          "sym": "2357.TW",
          "name": "Asustek Computer Inc"
        },
        {
          "sym": "1326.TW",
          "name": "Formosa Chemicals & Fibre Corp"
        },
        {
          "sym": "2201.TW",
          "name": "Yulon Motor Co Ltd"
        },
        {
          "sym": "1402.TW",
          "name": "Far Eastern New Century Corp"
        },
        {
          "sym": "5880.TW",
          "name": "Taiwan Cooperative Financial Holding Co Ltd"
        }
      ]
    },
    {
      "id": "egx",
      "label": "🇪🇬 EGX CAIRO",
      "exchange": "EGYPTIAN EXCHANGE",
      "suffix": ".EGX",
      "currency": "EGP",
      "stocks": [
        {
          "sym": "COMI.EGX",
          "name": "Commercial International Bank-Egypt (CIB)"
        },
        {
          "sym": "HRHO.EGX",
          "name": "EFG Holding"
        },
        {
          "sym": "SWDY.EGX",
          "name": "Elsewedy Electric"
        },
        {
          "sym": "ORAS.EGX",
          "name": "Orascom Construction PLC"
        },
        {
          "sym": "ESRS.EGX",
          "name": "Ezz Steel"
        },
        {
          "sym": "ETEL.EGX",
          "name": "Telecom Egypt"
        },
        {
          "sym": "TMGH.EGX",
          "name": "T M G Holding"
        },
        {
          "sym": "EAST.EGX",
          "name": "Eastern Company"
        },
        {
          "sym": "ABUK.EGX",
          "name": "Abou Kir Fertilizers"
        },
        {
          "sym": "EGAL.EGX",
          "name": "Egypt Aluminum"
        },
        {
          "sym": "EMFD.EGX",
          "name": "Emaar Misr for Development"
        },
        {
          "sym": "HDBK.EGX",
          "name": "Housing & Development Bank"
        },
        {
          "sym": "EGAS.EGX",
          "name": "Egypt Gas"
        },
        {
          "sym": "ACGC.EGX",
          "name": "Arab Cotton Ginning"
        },
        {
          "sym": "AFMC.EGX",
          "name": "Alexandria Flour Mills"
        },
        {
          "sym": "AALR.EGX",
          "name": "General Company For Land Reclamation"
        },
        {
          "sym": "CCAP.EGX",
          "name": "QALA For Financial Investments"
        },
        {
          "sym": "PHTV.EGX",
          "name": "Pyramisa Hotels"
        },
        {
          "sym": "RTVC.EGX",
          "name": "Remco for Touristic Villages Construction"
        },
        {
          "sym": "EITP.EGX",
          "name": "Egyptian International Tourism Projects"
        }
      ]
    },
    {
      "id": "xnsa",
      "label": "🇳🇬 NGX NIGERIA",
      "exchange": "NIGERIAN EXCHANGE GROUP",
      "suffix": ".XNSA",
      "currency": "NGN",
      "stocks": [
        {
          "sym": "DANGCEM.XNSA",
          "name": "Dangote Cement Plc"
        },
        {
          "sym": "MTNN.XNSA",
          "name": "MTN Nigeria Communications Plc"
        },
        {
          "sym": "GTCO.XNSA",
          "name": "Guaranty Trust Holding Company Plc"
        },
        {
          "sym": "AIRTELAFRI.XNSA",
          "name": "Airtel Africa Plc"
        },
        {
          "sym": "ZENITHBANK.XNSA",
          "name": "Zenith Bank Plc"
        },
        {
          "sym": "UBA.XNSA",
          "name": "United Bank for Africa Plc"
        },
        {
          "sym": "FBNH.XNSA",
          "name": "FBN Holdings Plc"
        },
        {
          "sym": "BUACEMENT.XNSA",
          "name": "BUA Cement Plc"
        },
        {
          "sym": "SEPLAT.XNSA",
          "name": "Seplat Energy Plc"
        },
        {
          "sym": "NESTLE.XNSA",
          "name": "Nestle Nigeria Plc"
        },
        {
          "sym": "FLOURMILL.XNSA",
          "name": "Flour Mills Nigeria Plc"
        },
        {
          "sym": "NB.XNSA",
          "name": "Nigerian Breweries Plc"
        },
        {
          "sym": "GUINNESS.XNSA",
          "name": "Guinness Nigeria Plc"
        },
        {
          "sym": "DANGSUGAR.XNSA",
          "name": "Dangote Sugar Refinery Plc"
        },
        {
          "sym": "WAPCO.XNSA",
          "name": "Lafarge Africa Plc"
        },
        {
          "sym": "NASCON.XNSA",
          "name": "Nascon Allied Industries Plc"
        },
        {
          "sym": "TRANSCORP.XNSA",
          "name": "Transnational Corporation of Nigeria Plc"
        },
        {
          "sym": "UNILEVER.XNSA",
          "name": "Unilever Nigeria Plc"
        },
        {
          "sym": "FCMB.XNSA",
          "name": "FCMB Group Plc"
        },
        {
          "sym": "TOTAL.XNSA",
          "name": "TotalEnergies Marketing Nigeria Plc"
        }
      ]
    },
    {
      "id": "karachi",
      "label": "🇵🇰 PSX KARACHI",
      "exchange": "PAKISTAN STOCK EXCHANGE",
      "suffix": ".KAR",
      "currency": "PKR",
      "stocks": [
        {
          "sym": "ENGRO.KAR",
          "name": "Engro Corporation Ltd"
        },
        {
          "sym": "HBL.KAR",
          "name": "Habib Bank Ltd"
        },
        {
          "sym": "MCB.KAR",
          "name": "MCB Bank Ltd"
        },
        {
          "sym": "OGDC.KAR",
          "name": "Oil and Gas Development Co Ltd"
        },
        {
          "sym": "FFC.KAR",
          "name": "Fauji Fertilizer Company Ltd"
        },
        {
          "sym": "LUCK.KAR",
          "name": "Lucky Cement Ltd"
        },
        {
          "sym": "BAFL.KAR",
          "name": "Bank Alfalah Ltd"
        },
        {
          "sym": "BAHL.KAR",
          "name": "Bank Al-Habib Ltd"
        },
        {
          "sym": "DGKC.KAR",
          "name": "D G Khan Cement Company Ltd"
        },
        {
          "sym": "EFERT.KAR",
          "name": "Engro Fertilizers Ltd"
        },
        {
          "sym": "HUBC.KAR",
          "name": "Hub Power Company Ltd"
        },
        {
          "sym": "ABL.KAR",
          "name": "Allied Bank Ltd"
        },
        {
          "sym": "BOP.KAR",
          "name": "Bank of Punjab"
        },
        {
          "sym": "EPCL.KAR",
          "name": "Engro Polymer & Chemicals Ltd"
        },
        {
          "sym": "AKBL.KAR",
          "name": "Askari Bank Ltd"
        },
        {
          "sym": "ATRL.KAR",
          "name": "Attock Refinery Ltd"
        },
        {
          "sym": "AHCL.KAR",
          "name": "Arif Habib Corporation Ltd"
        },
        {
          "sym": "AGP.KAR",
          "name": "AGP Ltd"
        },
        {
          "sym": "ABOT.KAR",
          "name": "Abbott Laboratories Pakistan Ltd"
        },
        {
          "sym": "ACPL.KAR",
          "name": "Attock Cement Pakistan Ltd"
        }
      ]
    },
    {
      "id": "kosdaq",
      "label": "🇰🇷 KOSDAQ SOUTH KOREA",
      "exchange": "KOREA EXCHANGE (KOSDAQ)",
      "suffix": ".KQ",
      "currency": "KRW",
      "stocks": [
        {
          "sym": "247540.KQ",
          "name": "Ecopro BM Co Ltd"
        },
        {
          "sym": "086520.KQ",
          "name": "Ecopro Co Ltd"
        },
        {
          "sym": "028300.KQ",
          "name": "HLB Co Ltd"
        },
        {
          "sym": "263750.KQ",
          "name": "Pearl Abyss Corp"
        },
        {
          "sym": "112040.KQ",
          "name": "Wemade Co Ltd"
        },
        {
          "sym": "041510.KQ",
          "name": "SM Entertainment Co Ltd"
        },
        {
          "sym": "035900.KQ",
          "name": "JYP Entertainment Corp"
        },
        {
          "sym": "122870.KQ",
          "name": "YG Entertainment Inc"
        },
        {
          "sym": "293490.KQ",
          "name": "Kakao Games Corp"
        },
        {
          "sym": "196170.KQ",
          "name": "Alteogen Inc"
        },
        {
          "sym": "326030.KQ",
          "name": "SK Bioscience Co Ltd"
        },
        {
          "sym": "145020.KQ",
          "name": "Hugel Inc"
        },
        {
          "sym": "214150.KQ",
          "name": "Climmune Inc"
        },
        {
          "sym": "000720.KQ",
          "name": "Hyundai Engineering & Construction Co Ltd"
        },
        {
          "sym": "000670.KQ",
          "name": "Young Poong Corp"
        },
        {
          "sym": "000640.KQ",
          "name": "Dong-A Socio Holdings Co Ltd"
        },
        {
          "sym": "000150.KQ",
          "name": "Doosan Corp"
        },
        {
          "sym": "000100.KQ",
          "name": "Yuhan Corp"
        },
        {
          "sym": "000220.KQ",
          "name": "Yuyu Pharma Inc."
        },
        {
          "sym": "000230.KQ",
          "name": "Il Dong Holdings Co. Ltd."
        },
        {
          "sym": "000320.KQ",
          "name": "NOROO Holdings Co. Ltd."
        },
        {
          "sym": "000390.KQ",
          "name": "Samhwa Paint Industrial Co. Ltd."
        },
        {
          "sym": "000400.KQ",
          "name": "Lotte Non-Life Insurance Co. Ltd."
        },
        {
          "sym": "000430.KQ",
          "name": "Dae Won Kang Up Co. Ltd."
        },
        {
          "sym": "000480.KQ",
          "name": "Chosun Refractories Co. Ltd."
        },
        {
          "sym": "000500.KQ",
          "name": "Gaon Cable Co. Ltd."
        },
        {
          "sym": "000520.KQ",
          "name": "Samil Pharmaceutical Co. Ltd."
        },
        {
          "sym": "000540.KQ",
          "name": "Heungkuk Fire & Marine Insurance Co. Ltd."
        },
        {
          "sym": "000650.KQ",
          "name": "Chunil Express Co. Ltd."
        },
        {
          "sym": "000680.KQ",
          "name": "LS Networks Corp. Ltd."
        },
        {
          "sym": "000700.KQ",
          "name": "EUSU Holdings Co. Ltd."
        },
        {
          "sym": "000810.KQ",
          "name": "Samsung Fire & Marine Insurance Co. Ltd."
        },
        {
          "sym": "000850.KQ",
          "name": "Hwacheon Machine Tool Co. Ltd."
        }
      ]
    },
    {
      "id": "krx",
      "label": "🇰🇷 KRX SOUTH KOREA",
      "exchange": "KOREA EXCHANGE (KRX)",
      "suffix": ".KO",
      "currency": "KRW",
      "stocks": [
        {
          "sym": "005930.KO",
          "name": "Samsung Electronics Co. Ltd."
        },
        {
          "sym": "000660.KO",
          "name": "SK Hynix Inc."
        },
        {
          "sym": "005380.KO",
          "name": "Hyundai Motor Company"
        },
        {
          "sym": "000270.KO",
          "name": "Kia Corporation"
        },
        {
          "sym": "051910.KO",
          "name": "LG Chem Ltd."
        },
        {
          "sym": "035420.KO",
          "name": "NAVER Corporation"
        },
        {
          "sym": "068270.KO",
          "name": "Celltrion Inc."
        },
        {
          "sym": "373220.KO",
          "name": "LG Energy Solution Ltd."
        },
        {
          "sym": "207940.KO",
          "name": "Samsung Biologics Co. Ltd."
        },
        {
          "sym": "006400.KO",
          "name": "Samsung SDI Co. Ltd."
        },
        {
          "sym": "003550.KO",
          "name": "LG Corporation"
        },
        {
          "sym": "012330.KO",
          "name": "Hyundai Mobis Co. Ltd."
        },
        {
          "sym": "028260.KO",
          "name": "Samsung C&T Corporation"
        },
        {
          "sym": "009150.KO",
          "name": "Samsung Electro-Mechanics Co."
        },
        {
          "sym": "000810.KO",
          "name": "Samsung Fire & Marine Insurance"
        },
        {
          "sym": "055550.KO",
          "name": "Shinhan Financial Group Co. Ltd."
        },
        {
          "sym": "105560.KO",
          "name": "KB Financial Group Inc."
        },
        {
          "sym": "086790.KO",
          "name": "Hana Financial Group Inc."
        },
        {
          "sym": "096770.KO",
          "name": "SK Innovation Co. Ltd."
        },
        {
          "sym": "017670.KO",
          "name": "SK Telecom Co. Ltd."
        },
        {
          "sym": "030200.KO",
          "name": "KT Corporation"
        },
        {
          "sym": "003670.KO",
          "name": "POSCO Holdings Inc."
        },
        {
          "sym": "011200.KO",
          "name": "HMM Co. Ltd."
        },
        {
          "sym": "066570.KO",
          "name": "LG Electronics Inc."
        },
        {
          "sym": "034730.KO",
          "name": "SK Inc."
        }
      ]
    },
    {
      "id": "nse_direct",
      "label": "🇮🇳 NSE INDIA (NIFTY)",
      "exchange": "NATIONAL STOCK EXCHANGE",
      "suffix": ".NSE",
      "currency": "INR",
      "stocks": [
        {
          "sym": "RELIANCE.NSE",
          "name": "Reliance Industries Limited"
        },
        {
          "sym": "TCS.NSE",
          "name": "Tata Consultancy Services Limited"
        },
        {
          "sym": "HDFCBANK.NSE",
          "name": "HDFC Bank Limited"
        },
        {
          "sym": "INFY.NSE",
          "name": "Infosys Limited"
        },
        {
          "sym": "ICICIBANK.NSE",
          "name": "ICICI Bank Limited"
        },
        {
          "sym": "HINDUNILVR.NSE",
          "name": "Hindustan Unilever Limited"
        },
        {
          "sym": "KOTAKBANK.NSE",
          "name": "Kotak Mahindra Bank Limited"
        },
        {
          "sym": "SBIN.NSE",
          "name": "State Bank of India"
        },
        {
          "sym": "BHARTIARTL.NSE",
          "name": "Bharti Airtel Limited"
        },
        {
          "sym": "BAJFINANCE.NSE",
          "name": "Bajaj Finance Limited"
        },
        {
          "sym": "WIPRO.NSE",
          "name": "Wipro Limited"
        },
        {
          "sym": "HCLTECH.NSE",
          "name": "HCL Technologies Limited"
        },
        {
          "sym": "TECHM.NSE",
          "name": "Tech Mahindra Limited"
        },
        {
          "sym": "LT.NSE",
          "name": "Larsen & Toubro Limited"
        },
        {
          "sym": "MARUTI.NSE",
          "name": "Maruti Suzuki India Limited"
        },
        {
          "sym": "SUNPHARMA.NSE",
          "name": "Sun Pharmaceutical Industries"
        },
        {
          "sym": "TITAN.NSE",
          "name": "Titan Company Limited"
        },
        {
          "sym": "ASIANPAINT.NSE",
          "name": "Asian Paints Limited"
        },
        {
          "sym": "NTPC.NSE",
          "name": "NTPC Limited"
        },
        {
          "sym": "POWERGRID.NSE",
          "name": "Power Grid Corporation of India"
        },
        {
          "sym": "NESTLEIND.NSE",
          "name": "Nestle India Limited"
        },
        {
          "sym": "ULTRACEMCO.NSE",
          "name": "UltraTech Cement Limited"
        },
        {
          "sym": "TATASTEEL.NSE",
          "name": "Tata Steel Limited"
        },
        {
          "sym": "TATAMOTORS.NSE",
          "name": "Tata Motors Limited"
        },
        {
          "sym": "ONGC.NSE",
          "name": "Oil & Natural Gas Corporation"
        },
        {
          "sym": "AXISBANK.NSE",
          "name": "Axis Bank Limited"
        },
        {
          "sym": "DRREDDY.NSE",
          "name": "Dr. Reddy Laboratories"
        },
        {
          "sym": "CIPLA.NSE",
          "name": "Cipla Limited"
        },
        {
          "sym": "PERSISTENT.NSE",
          "name": "Persistent Systems Limited"
        },
        {
          "sym": "COFORGE.NSE",
          "name": "Coforge Limited"
        }
      ]
    },
    {
      "id": "bvc",
      "label": "🇲🇦 BVMT CASABLANCA",
      "exchange": "CASABLANCA STOCK EXCHANGE",
      "suffix": ".BC",
      "currency": "MAD",
      "stocks": [
        {
          "sym": "ATTIJARIWAFA-BANK",
          "name": "Attijariwafa Bank"
        },
        {
          "sym": "BANK-OF-AFRICA",
          "name": "Bank of Africa"
        },
        {
          "sym": "BCP",
          "name": "BCP"
        },
        {
          "sym": "BMCI",
          "name": "BMCI"
        },
        {
          "sym": "CIMENTS-DU-MAROC",
          "name": "Ciments du Maroc"
        },
        {
          "sym": "COSUMAR",
          "name": "Cosumar"
        },
        {
          "sym": "ITISSALAT-AL-MAGHRIB",
          "name": "Itissalat Al-Maghrib"
        },
        {
          "sym": "LAFARGEHOLCIM-MAR",
          "name": "LafargeHolcim Maroc"
        },
        {
          "sym": "LESIEUR-CRISTAL",
          "name": "Lesieur Cristal"
        },
        {
          "sym": "MANAGEM",
          "name": "Managem"
        },
        {
          "sym": "MINIERE-TOUISSIT",
          "name": "Miniere Touissit"
        },
        {
          "sym": "SNEP",
          "name": "SNEP"
        },
        {
          "sym": "SODEP-Marsa-Maroc",
          "name": "SODEP Marsa Maroc"
        },
        {
          "sym": "SONASID",
          "name": "Sonasid"
        },
        {
          "sym": "SOTHEMA",
          "name": "Sothema"
        },
        {
          "sym": "TAQA-MOROCCO",
          "name": "TAQA Morocco"
        },
        {
          "sym": "TOTALENERGIES-MARKETING-MAROC",
          "name": "TotalEnergies Marketing Maroc"
        },
        {
          "sym": "WAFA-ASSURANCE",
          "name": "Wafa Assurance"
        },
        {
          "sym": "RISMA",
          "name": "Risma"
        },
        {
          "sym": "LABEL-VIE",
          "name": "Label Vie"
        }
      ]
    },
    {
      "id": "africa",
      "label": "🌍 AFRICA MULTI-EXCHANGE",
      "exchange": "GSE / RSE / USE / NSE NAIROBI",
      "suffix": "",
      "currency": "USD",
      "stocks": [
        {
          "sym": "MTNGH.GSE",
          "name": "MTN GHANA LTD"
        },
        {
          "sym": "GOIL.GSE",
          "name": "GHANA OIL COMPANY LIMITED"
        },
        {
          "sym": "SCB.GSE",
          "name": "STANDARD CHARTERED BANK (GHANA) LTD."
        },
        {
          "sym": "FML.GSE",
          "name": "FAN MILK LTD."
        },
        {
          "sym": "RBGH.GSE",
          "name": "REPUBLIC BANK (GHANA) LIMITED"
        },
        {
          "sym": "MTNR.RSE",
          "name": "MTN RWANDACELL PLC"
        },
        {
          "sym": "BOK.RSE",
          "name": "BANK OF KIGALI"
        },
        {
          "sym": "BLR.RSE",
          "name": "BRALIRWA LTD"
        },
        {
          "sym": "EQTY.RSE",
          "name": "EQUITY GROUP HOLDINGS LTD"
        },
        {
          "sym": "IMR.RSE",
          "name": "I&M BANK RWANDA LTD"
        },
        {
          "sym": "MTNU.USE",
          "name": "MTN UGANDA LIMITED"
        },
        {
          "sym": "SBU.USE",
          "name": "STANBIC BANK HOLDINGS LTD"
        },
        {
          "sym": "BATU.USE",
          "name": "BRITISH AMERICAN TOBACCO UGANDA LTD"
        },
        {
          "sym": "BOBU.USE",
          "name": "BANK OF BARODA UGANDA LTD"
        },
        {
          "sym": "UMEM.USE",
          "name": "UMEME LIMITED"
        },
        {
          "sym": "SAFARI.XNAI",
          "name": "SAFARICOM PLC"
        },
        {
          "sym": "KCB.XNAI",
          "name": "KCB GROUP PLC"
        },
        {
          "sym": "EABL.XNAI",
          "name": "EAST AFRICAN BREWERIES LTD"
        },
        {
          "sym": "EQTY.XNAI",
          "name": "EQUITY GROUP HOLDINGS LTD"
        },
        {
          "sym": "SCBK.XNAI",
          "name": "STANDARD CHARTERED BANK KENYA LTD"
        }
      ]
    },
    {
      "id": "dus",
      "label": "🇩🇪 DÜSSELDORF BÖRSE",
      "exchange": "BOERSE DUESSELDORF",
      "suffix": ".DU",
      "currency": "EUR",
      "stocks": [
        {
          "sym": "ALV.DU",
          "name": "Allianz SE"
        },
        {
          "sym": "BAS.DU",
          "name": "BASF SE"
        },
        {
          "sym": "BAYN.DU",
          "name": "Bayer AG"
        },
        {
          "sym": "BMW.DU",
          "name": "BMW AG"
        },
        {
          "sym": "DAI.DU",
          "name": "Daimler AG"
        },
        {
          "sym": "DBK.DU",
          "name": "Deutsche Bank AG"
        },
        {
          "sym": "DPW.DU",
          "name": "Deutsche Post AG"
        },
        {
          "sym": "DTE.DU",
          "name": "Deutsche Telekom AG"
        },
        {
          "sym": "MUV2.DU",
          "name": "Munich Re"
        },
        {
          "sym": "SIE.DU",
          "name": "Siemens AG"
        }
      ]
    }
  ];
