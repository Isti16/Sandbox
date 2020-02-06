/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-inferrable-types */
/* eslint-disable no-var */
/* eslint-disable prefer-const */
import fs from "fs";
import http from "http";

interface InputInterface {
    name: string;
    age: number;
    male: boolean;
}
export default class Content {
    public content(req: http.IncomingMessage, res: http.ServerResponse): void {
        // favicon.ico kérés kiszolgálása:
        if (req.url === "/favicon.ico") {
            res.writeHead(200, { "Content-Type": "image/x-icon" });
            fs.createReadStream("favicon.ico").pipe(res);
            return;
        }
        // Weboldal inicializálása + head rész:
        res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
        res.write("<!DOCTYPE html>");
        res.write("<html lang='hu'>");
        res.write("<head>");
        res.write("<style>input, pre {font-family:monospace; font-size:1em; font-weight:bold;}</style>");
        res.write("<meta name='viewport' content='width=device-width, initial-scale=1.0'>");
        res.write("<title>Jedlik Ts Template</title>");
        res.write("</head>");
        res.write("<body><form><pre>");

        // Kezd a kódolást innen -->

        var age: number = 32; // number variable
        var name: string = "John";
        let isMarried: boolean = false; // string variable
        var isUpdated: boolean = true; // Boolean variable
        let próba: string = "Alma";
        const próba2: string = "Alma2";
        let fruits: string[] = ["Alma", "Körte", "Narancs"];
        var bestPerson: [number, string, boolean] = [1, "Miklós", true];
        enum Jobs {
            Programmer = 1,
            Postman = 5,
            Teacher = 5,
            Farmer = 10
        }

        res.write(`${age} ${name} ${isUpdated} `);

        res.write("\n\nStringek: ");
        res.write(`\n${próba} ${próba2}`);
        res.write(`\nAz ${próba} leesett a fáról.`);

        res.write("\n\nSzámok: ");
        res.write(`\n${age}`);
        res.write(`\n${name} ${age} éves`);

        res.write("\n\nHázas-e?: ");
        res.write(`\n${isMarried}`);

        res.write("\n\nGyümölcsök Lista második eleme (körte): ");
        res.write(`\n${fruits[1]}`);
        res.write("\nGyümölcsök lista kiírása for ciklussal: ");
        for (var index in fruits) {
            res.write(`${fruits[index]},`); // output: Alma Körte Narancs
        }

        res.write("\n\n(Tuple) A hónap dolgozója: ");
        res.write(`\n${bestPerson[1]}`);

        res.write("\n\nEnum (Programozás munka számának kiírása):");
        res.write(`\n${Jobs.Programmer}`);

        // <---- Fejezd be a kódolást

        res.write("</pre></form></body></html>");
        res.end();
    }
}
