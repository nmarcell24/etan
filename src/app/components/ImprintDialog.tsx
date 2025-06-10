import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import React from "react";

export default function ImprintDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="link">Impresszum</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Impresszum</DialogTitle>
        </DialogHeader>
        <div className="text-sm space-y-2">
          <p>
            <strong>Üzemeltető neve:</strong> Papp Antal Imre
          </p>
          <p>
            <strong>Cég neve:</strong> Papp Antal Imre Egyéni Vállalkozó
          </p>
          <p>
            <strong>Cím:</strong> 4405 Nyíregyháza, Korong utca 23.
          </p>
          <p>
            <strong>E-mail: </strong> antoniuszx@gmail.com
          </p>
          <p>
            <strong>Telefonszám: </strong> +36 70 269 7555
          </p>
          <p>
            <strong>Adószám:</strong> 91025971-1-35
          </p>
          <p>
            <strong>Tárhelyszolgáltató:</strong> Vercel Inc.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
