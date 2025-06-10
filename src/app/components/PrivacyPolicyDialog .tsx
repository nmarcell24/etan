"use client"; // Fontos, ha kliens oldali interaktivitás van, mint egy dialog.

import React from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

const privacyPolicy = {
  title: "Adatvédelmi Nyilatkozat",
  lastUpdated: "2025. június 10.", // Frissítés dátuma
  sections: [
    {
      id: "intro",
      title: "1. Bevezetés",
      content: `
        Jelen Adatvédelmi Nyilatkozat célja, hogy tájékoztassa Önt E-TAN az Ön személyes adatainak gyűjtésével, kezelésével, feldolgozásával és tárolásával kapcsolatos gyakorlatunkról. Kérjük, figyelmesen olvassa el ezt a Nyilatkozatot, mivel fontos információkat tartalmaz arról, hogy hogyan kezeljük az Ön adatait, és milyen jogai vannak ezzel kapcsolatban.
        Az adatkezelésre vonatkozóan a természetes személyeknek a személyes adatok kezelése tekintetében történő védelméről és az ilyen adatok szabad áramlásáról, valamint a 95/46/EK irányelv hatályon kívül helyezéséről szóló, az Európai Parlament és a Tanács (EU) 2016/679 rendelete (általános adatvédelmi rendelet, a továbbiakban: GDPR), valamint az információs önrendelkezési jogról és az információszabadságról szóló 2011. évi CXII. törvény (a továbbiakban: Info. tv.) rendelkezései az irányadók.
      `,
    },
    {
      id: "dataController",
      title: "2. Adatkezelő adatai",
      content: `
        **Adatkezelő:**
        A weboldal üzemeltetőjének neve: Papp Antal Imre
        Cégforma: Egyéni vállalkozás
        Lakcím: 4405 Nyíregyháza, Korong utca 23. 

        **Elérhetőségek:**
        E-mail: antoniuszx@gmail.com
        Telefon: +36 70 269 7555
      `,
    },
    {
      id: "dataCollected",
      title: "3. Milyen adatokat gyűjtünk és miért?",
      content: `
        A Szolgáltató az alábbi célokból gyűjti és kezeli az Ön adatait:

        **Weboldal látogatottsági statisztikák (Vercel Analytics):**
        * **Cél:** A weboldalunk teljesítményének mérése, a felhasználói élmény optimalizálása, a tartalom relevanciájának javítása, hibakeresés és a szolgáltatás fejlesztése.
        * **Gyűjtött adatok kategóriái:** Oldallátogatások száma, forgalmi források (honnan érkezett a látogató), eszköz típusa (asztali gép/mobil), böngésző típusa, operációs rendszer, ország, látogatott oldalak, munkamenet hossza, betöltési sebesség.
        * **Adatgyűjtés jellege:** A Vercel Analytics egy adatvédelmi szempontból kíméletes (privacy-focused) analitikai eszköz. Nem használ harmadik féltől származó sütiket, nem gyűjt személyesen azonosítható adatokat (pl. IP-címek vagy egyedi felhasználói azonosítók), és az adatok anonimizált módon kerülnek gyűjtésre és feldolgozásra. A munkamenet adatok 24 órán belül törlődnek.
        * **Jogalap:** Az Ön hozzájárulása (amennyiben cookie banneren keresztül jelezte), vagy a Szolgáltató jogos érdeke (GDPR 6. cikk (1) f) pontja), amely az online szolgáltatás elemzésére és fejlesztésére irányul.
        * **Adattárolás:** Az aggregált statisztikák hosszabb ideig megmaradhatnak, de az egyedi munkamenet adatok 24 órán belül törlődnek.
      `,
    },
    {
      id: "dataProcessors",
      title: "4. Adatfeldolgozók",
      content: `
        Az Ön adatainak kezelése során a Szolgáltató az alábbi adatfeldolgozókat veszi igénybe:

        **a) Vercel Inc. (Weboldal hosting és Analytics):**
        * **Székhely:** San Francisco, CA, USA
        * **Szolgáltatás:** A weboldal hostingja és az anonimizált weboldal-analitika biztosítása.
        * **Adatkezelési jogalap:** A Szolgáltató és a Vercel Inc. között a GDPR követelményeinek megfelelő adatfeldolgozási megállapodás (Data Processing Agreement - DPA) van érvényben.
        * **Adattovábbítás harmadik országba:** Mivel a Vercel egy Egyesült Államokbeli cég, az adatok az USA-ba kerülhetnek továbbításra. Ez az adattovábbítás az EU-USA Adatvédelmi Keretrendszer (Data Privacy Framework - DPF) vagy a Standard Szerződési Feltételek (SCC-k) alapján történik, amelyek megfelelő garanciát nyújtanak az adatok védelmére.
        `,
    },
    {
      id: "yourRights",
      title: "5. Az Ön adatvédelmi jogai",
      content: `
        A GDPR és az Info. tv. alapján Önnek az alábbi jogai vannak személyes adatainak kezelésével kapcsolatban:

        * **Hozzáférési jog:** Kérheti, hogy tájékoztatást kapjon arról, hogy a Szolgáltató kezeli-e az Ön személyes adatait, és ha igen, milyen adatokat, milyen célból, kivel osztja meg, és mennyi ideig tárolja azokat.
        * **Helyesbítéshez való jog:** Kérheti a pontatlan személyes adatok helyesbítését, vagy a hiányos adatok kiegészítését.
        * **Törléshez való jog ("elfeledtetéshez való jog"):** Kérheti személyes adatainak törlését, ha azok már nem szükségesek ahhoz a célhoz, amelyre gyűjtötték őket, vagy ha visszavonja hozzájárulását.
        * **Adatkezelés korlátozásához való jog:** Kérheti az adatok kezelésének korlátozását, például ha vitatja az adatok pontosságát.
        * **Adathordozhatósághoz való jog:** Jogában áll az Önre vonatkozó, Ön által a Szolgáltató rendelkezésére bocsátott személyes adatokat tagolt, széles körben használt, géppel olvasható formátumban megkapni, és ezeket az adatokat egy másik adatkezelőnek továbbítani.
        * **Tiltakozáshoz való jog:** Tiltakozhat személyes adatainak kezelése ellen, amennyiben az adatkezelés a Szolgáltató jogos érdekén alapul.
        * **Visszavonás joga:** Amennyiben az adatkezelés az Ön hozzájárulásán alapul, Ön bármikor visszavonhatja hozzájárulását, anélkül, hogy ez érintené a hozzájárulás visszavonása előtti adatkezelés jogszerűségét.

        Jogait az adatkezelőnek az Impresszumban megadott elérhetőségein keresztül gyakorolhatja. A Szolgáltató indokolatlan késedelem nélkül, de legkésőbb a kérelem beérkezésétől számított egy hónapon belül tájékoztatja Önt a jogai gyakorlásával kapcsolatos intézkedésekről.
      `,
    },
    {
      id: "complaint",
      title: "6. Panasz benyújtásának joga",
      content: `
        Amennyiben úgy ítéli meg, hogy az Ön személyes adatainak kezelése sérti a GDPR vagy más adatvédelmi jogszabályok rendelkezéseit, panasszal élhet az illetékes felügyeleti hatóságnál:

        **Nemzeti Adatvédelmi és Információszabadság Hatóság (NAIH)**
        Cím: 1055 Budapest, Falk Miksa utca 9-11.
        Postacím: 1363 Budapest, Pf.: 9.
        Telefon: +36 1 391 1400
        Fax: +36 1 391 1410
        E-mail: ugyfelszolgalat@naih.hu
        Weboldal: www.naih.hu
      `,
    },
    {
      id: "policyChanges",
      title: "8. Az Adatvédelmi Nyilatkozat módosítása",
      content: `
        A Szolgáltató fenntartja a jogot, hogy jelen Adatvédelmi Nyilatkozatot bármikor módosítsa. A módosításokat a közzétételtől számított [pl. 8 napon] belül hatályosnak kell tekinteni. Kérjük, rendszeresen ellenőrizze ezt az oldalt az esetleges változásokért.
      `,
    },
  ],
};

const PrivacyPolicyDialog = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="link">Adatvédelmi Nyilatkozat</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[800px] h-[90vh] flex flex-col">
        <DialogHeader>
          <DialogTitle>{privacyPolicy.title}</DialogTitle>
          <DialogDescription>
            Utolsó frissítés: {privacyPolicy.lastUpdated}
          </DialogDescription>
        </DialogHeader>

        {/* A tartalom görgethetővé tétele ScrollArea-val */}
        <ScrollArea className="h-[75vh] xl:h-[78vh] pr-4">
          {privacyPolicy.sections.map((section) => (
            <div key={section.id} className="mb-6">
              <h3 className="text-lg font-semibold mb-2">
                {section.title}
              </h3>
              <div
                dangerouslySetInnerHTML={{ __html: section.content.trim() }}
                className="text-sm leading-relaxed text-muted-foreground"
              />
            </div>
          ))}
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default PrivacyPolicyDialog;