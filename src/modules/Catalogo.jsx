import React, { useEffect, useRef, useState } from "react";
import "./catalogo.css";
import "./catalogoR.css";
import img1 from "../assets/amigurimis/1.jpg";
import img2 from "../assets/amigurimis/2.jpg";
import img3 from "../assets/amigurimis/3.jpg";
import img4 from "../assets/amigurimis/4.jpg";
import img5 from "../assets/amigurimis/5.jpg";
import img6 from "../assets/amigurimis/6.jpg";
import img7 from "../assets/amigurimis/7.jpg";
import img8 from "../assets/amigurimis/8.jpg";
import img9 from "../assets/amigurimis/9.jpg";
import img10 from "../assets/amigurimis/10.jpg";
import img11 from "../assets/amigurimis/11.jpg";
import img12 from "../assets/amigurimis/12.jpg";
import img13 from "../assets/amigurimis/13.jpg";
import img14 from "../assets/amigurimis/14.jpg";
import img15 from "../assets/amigurimis/15.jpg";
import img16 from "../assets/amigurimis/16.jpg";
import img17 from "../assets/amigurimis/17.jpg";
import img18 from "../assets/amigurimis/18.jpg";
import img19 from "../assets/amigurimis/19.jpg";
import img20 from "../assets/amigurimis/20.jpg";
import img21 from "../assets/amigurimis/21.jpg";
import img22 from "../assets/amigurimis/22.jpg";
import img23 from "../assets/amigurimis/23.jpg";
import img24 from "../assets/amigurimis/24.jpg";
import img25 from "../assets/amigurimis/25.jpg";
import img26 from "../assets/amigurimis/26.jpg";
import img27 from "../assets/amigurimis/27.jpg";
import img28 from "../assets/amigurimis/28.jpg";
import img29 from "../assets/amigurimis/29.jpg";
import img30 from "../assets/amigurimis/30.jpg";
import img31 from "../assets/amigurimis/31.jpg";
import img32 from "../assets/amigurimis/32.jpg";
import img33 from "../assets/amigurimis/33.jpg";
import img34 from "../assets/amigurimis/34.jpg";
import img35 from "../assets/amigurimis/35.jpg";
import img36 from "../assets/amigurimis/36.jpg";
import img37 from "../assets/amigurimis/37.jpg";
import img38 from "../assets/amigurimis/38.jpg";
import img39 from "../assets/amigurimis/39.jpg";
import img40 from "../assets/amigurimis/40.jpg";
import img41 from "../assets/amigurimis/41.jpg";
import img42 from "../assets/amigurimis/42.jpg";
import img43 from "../assets/amigurimis/43.jpg";
import img44 from "../assets/amigurimis/44.jpg";
import img45 from "../assets/amigurimis/45.jpg";
import img46 from "../assets/amigurimis/46.jpg";
import img47 from "../assets/amigurimis/47.jpg";
import img48 from "../assets/amigurimis/48.jpg";
import img49 from "../assets/amigurimis/49.jpg";
import img50 from "../assets/amigurimis/50.jpg";
import img51 from "../assets/amigurimis/51.jpg";
import img52 from "../assets/amigurimis/52.jpg";
import img53 from "../assets/amigurimis/53.jpg";
import img54 from "../assets/amigurimis/54.jpg";
import img55 from "../assets/amigurimis/55.jpg";
import img56 from "../assets/amigurimis/56.jpg";
import img57 from "../assets/amigurimis/57.jpg";
import img58 from "../assets/amigurimis/58.jpg";
import img59 from "../assets/amigurimis/59.jpg";
import img60 from "../assets/amigurimis/60.jpg";
import img61 from "../assets/amigurimis/61.jpg";
import img62 from "../assets/amigurimis/62.jpg";
import img63 from "../assets/amigurimis/63.jpg";
import img64 from "../assets/amigurimis/64.jpg";
import img65 from "../assets/amigurimis/65.jpg";
import img66 from "../assets/amigurimis/66.jpg";
import img67 from "../assets/amigurimis/67.jpg";
import img68 from "../assets/amigurimis/68.jpg";
import img69 from "../assets/amigurimis/69.jpg";
import img70 from "../assets/amigurimis/70.jpg";
import img71 from "../assets/amigurimis/71.jpg";
import img72 from "../assets/amigurimis/72.jpg";
import img73 from "../assets/amigurimis/73.jpg";
import img74 from "../assets/amigurimis/74.jpg";
import img75 from "../assets/amigurimis/75.jpg";
import img76 from "../assets/amigurimis/76.jpg";
import img77 from "../assets/amigurimis/77.jpg";
import img78 from "../assets/amigurimis/78.jpg";
import img79 from "../assets/amigurimis/79.jpg";
import img80 from "../assets/amigurimis/80.jpg";
import img81 from "../assets/amigurimis/81.jpg";
import img82 from "../assets/amigurimis/82.jpg";
import img83 from "../assets/amigurimis/83.jpg";
import img84 from "../assets/amigurimis/84.jpg";
import img85 from "../assets/amigurimis/85.jpg";
import img86 from "../assets/amigurimis/86.jpg";
import img87 from "../assets/amigurimis/87.jpg";
import img88 from "../assets/amigurimis/88.jpg";
import img89 from "../assets/amigurimis/89.jpg";
import img90 from "../assets/amigurimis/90.jpg";
import img91 from "../assets/amigurimis/91.jpg";
import img92 from "../assets/amigurimis/92.jpg";
import img93 from "../assets/amigurimis/93.jpg";
import img94 from "../assets/amigurimis/94.jpg";
import img95 from "../assets/amigurimis/95.jpg";
import img96 from "../assets/amigurimis/96.jpg";
import img97 from "../assets/amigurimis/97.jpg";
import img98 from "../assets/amigurimis/98.jpg";
import img99 from "../assets/amigurimis/99.jpg";
import img100 from "../assets/amigurimis/100.jpg";
import img101 from "../assets/amigurimis/101.jpg";
import img102 from "../assets/amigurimis/102.jpg";
import img103 from "../assets/amigurimis/103.jpg";
import img104 from "../assets/amigurimis/104.jpg";
import img105 from "../assets/amigurimis/105.jpg";
import img106 from "../assets/amigurimis/106.jpg";
import img107 from "../assets/amigurimis/107.jpg";
import img108 from "../assets/amigurimis/108.jpg";
import img109 from "../assets/amigurimis/109.jpg";
import img110 from "../assets/amigurimis/110.jpg";
import img111 from "../assets/amigurimis/111.jpg";
import img112 from "../assets/amigurimis/112.jpg";
import img113 from "../assets/amigurimis/113.jpg";
import img114 from "../assets/amigurimis/114.jpg";
import img115 from "../assets/amigurimis/115.jpg";
import img116 from "../assets/amigurimis/116.jpg";
import img117 from "../assets/amigurimis/117.jpg";
import img118 from "../assets/amigurimis/118.jpg";
import img119 from "../assets/amigurimis/119.jpg";
import img120 from "../assets/amigurimis/120.jpg";
import img121 from "../assets/amigurimis/121.jpg";
import img122 from "../assets/amigurimis/122.jpg";
import img123 from "../assets/amigurimis/123.jpg";
import img124 from "../assets/amigurimis/124.jpg";
import img125 from "../assets/amigurimis/125.jpg";
import img126 from "../assets/amigurimis/126.jpg";
import img127 from "../assets/amigurimis/127.jpg";
import img128 from "../assets/amigurimis/128.jpg";
import img129 from "../assets/amigurimis/129.jpg";
import img130 from "../assets/amigurimis/130.jpg";
import img131 from "../assets/amigurimis/131.jpg";
import img132 from "../assets/amigurimis/132.jpg";
import img133 from "../assets/amigurimis/133.jpg";
import img134 from "../assets/amigurimis/134.jpg";
import img135 from "../assets/amigurimis/135.jpg";
import img136 from "../assets/amigurimis/136.jpg";
import img137 from "../assets/amigurimis/137.jpg";
import img138 from "../assets/amigurimis/138.jpg";
import img139 from "../assets/amigurimis/139.jpg";
import img140 from "../assets/amigurimis/140.jpg";
import img141 from "../assets/amigurimis/141.jpg";
import img142 from "../assets/amigurimis/142.jpg";
import img143 from "../assets/amigurimis/143.jpg";
import img144 from "../assets/amigurimis/144.jpg";
import img145 from "../assets/amigurimis/145.jpg";
import img146 from "../assets/amigurimis/146.jpg";
import img147 from "../assets/amigurimis/147.jpg";
import img148 from "../assets/amigurimis/148.jpg";
import img149 from "../assets/amigurimis/149.jpg";
import img150 from "../assets/amigurimis/150.jpg";
import img151 from "../assets/amigurimis/151.jpg";
import img152 from "../assets/amigurimis/152.jpg";
import img153 from "../assets/amigurimis/153.jpg";
import img154 from "../assets/amigurimis/154.jpg";
import img155 from "../assets/amigurimis/155.jpg";
import img156 from "../assets/amigurimis/156.jpg";
import img157 from "../assets/amigurimis/157.jpg";
import img158 from "../assets/amigurimis/158.jpg";
import img159 from "../assets/amigurimis/159.jpg";
import img160 from "../assets/amigurimis/160.jpg";
import img161 from "../assets/amigurimis/161.jpg";
import img162 from "../assets/amigurimis/162.jpg";
import img163 from "../assets/amigurimis/163.jpg";
import img164 from "../assets/amigurimis/164.jpg";
import img165 from "../assets/amigurimis/165.jpg";
import img166 from "../assets/amigurimis/166.jpg";
import img167 from "../assets/amigurimis/167.jpg";
import img168 from "../assets/amigurimis/168.jpg";
import img169 from "../assets/amigurimis/169.jpg";
import img170 from "../assets/amigurimis/170.jpg";
import img171 from "../assets/amigurimis/171.jpg";
import img172 from "../assets/amigurimis/172.jpg";
import img173 from "../assets/amigurimis/173.jpg";
import img174 from "../assets/amigurimis/174.jpg";
import img175 from "../assets/amigurimis/175.jpg";
import img176 from "../assets/amigurimis/176.jpg";
import img177 from "../assets/amigurimis/177.jpg";
import img178 from "../assets/amigurimis/178.jpg";
import img179 from "../assets/amigurimis/179.jpg";
import img180 from "../assets/amigurimis/180.jpg";
import img181 from "../assets/amigurimis/181.jpg";
import img182 from "../assets/amigurimis/182.jpg";
import img183 from "../assets/amigurimis/183.jpg";
import img184 from "../assets/amigurimis/184.jpg";
import img185 from "../assets/amigurimis/185.jpg";
import img186 from "../assets/amigurimis/186.jpg";
import img187 from "../assets/amigurimis/187.jpg";
import img188 from "../assets/amigurimis/188.jpg";
import img189 from "../assets/amigurimis/189.jpg";
import img190 from "../assets/amigurimis/190.jpg";
import img191 from "../assets/amigurimis/191.jpg";
import img192 from "../assets/amigurimis/192.jpg";
import img193 from "../assets/amigurimis/193.jpg";
import img194 from "../assets/amigurimis/194.jpg";
import img195 from "../assets/amigurimis/195.jpg";
import img196 from "../assets/amigurimis/196.jpg";
import img197 from "../assets/amigurimis/197.jpg";
import img198 from "../assets/amigurimis/198.jpg";
import img199 from "../assets/amigurimis/199.jpg";
import img200 from "../assets/amigurimis/200.jpg";
import img201 from "../assets/amigurimis/201.jpg";
import img202 from "../assets/amigurimis/202.jpg";
import img203 from "../assets/amigurimis/203.jpg";
import img204 from "../assets/amigurimis/204.jpg";
import img205 from "../assets/amigurimis/205.jpg";
import img206 from "../assets/amigurimis/206.jpg";
import img207 from "../assets/amigurimis/207.jpg";
import img208 from "../assets/amigurimis/208.jpg";
import img209 from "../assets/amigurimis/209.jpg";
import img210 from "../assets/amigurimis/210.jpg";
import img211 from "../assets/amigurimis/211.jpg";
import img212 from "../assets/amigurimis/212.jpg";
import img213 from "../assets/amigurimis/213.jpg";
import img214 from "../assets/amigurimis/214.jpg";
import img215 from "../assets/amigurimis/215.jpg";
import img216 from "../assets/amigurimis/216.jpg";
import img217 from "../assets/amigurimis/217.jpg";
import img218 from "../assets/amigurimis/218.jpg";
import img219 from "../assets/amigurimis/219.jpg";
import img220 from "../assets/amigurimis/220.jpg";
import img221 from "../assets/amigurimis/221.jpg";
import img222 from "../assets/amigurimis/222.jpg";
import imglayf from "../assets/layf.png";

const Catalogo = () => {
  // estructuras
  const productos = [
    { nombre: "Elefante", img: img1, cat: "flores medianas" },
    { nombre: "muneca rubia", img: img2, cat: "flores medianas" },
    { nombre: "animales", img: img3, cat: "tulipanes" },
    { nombre: "spiderman", img: img4, cat: "tulipanes" },
    { nombre: "perrito", img: img5, cat: "tulipanes" },
    { nombre: "godzilla", img: img6, cat: "bucaros pequenos" },
    { nombre: "unicornio", img: img7, cat: "bucaros pequenos" },
    { nombre: "mini", img: img8, cat: "bucaros pequenos" },
    { nombre: "animales x2", img: img9, cat: "pareja de captus" },
    { nombre: "animales x2", img: img10, cat: "pareja de captus" },
    { nombre: "ironman", img: img11, cat: "escultura de enamorados" },
    { nombre: "mario", img: img12, cat: "escultura de enamorados" },
    { nombre: "mamä osa", img: img13, cat: "escultura de enamorados" },
    { nombre: "muneco de nieve", img: img14, cat: "cuadro de parejas" },
    { nombre: "gatico", img: img15, cat: "cuadro de parejas" },
    { nombre: "girafa", img: img16, cat: "cuadro de parejas" },
    { nombre: "perrito", img: img17, cat: "cintillos para ninas" },
    { nombre: "yoda", img: img18, cat: "cintillos para ninas" },
    { nombre: "lady bougt", img: img19, cat: "cintillos para ninas" },
    { nombre: "miraculos", img: img20, cat: "cintillos para ninas" },
    { nombre: "gaticox2", img: img21, cat: "carruseles para bb" },
    { nombre: "mario", img: img22, cat: "carruseles para bb" },
    { nombre: "mujer", img: img23, cat: "carruseles para bb" },
    { nombre: "cap america", img: img24, cat: "carruseles para bb" },
    { nombre: "coneja", img: img25, cat: "carruseles para bb" },
    { nombre: "pocoyo", img: img26, cat: "carruseles para bb" },
    { nombre: "muneca", img: img27, cat: "cuadros decorativos" },
    { nombre: "sirenita ariel", img: img28, cat: "cuadros decorativos" },
    { nombre: "gato negro", img: img29, cat: "cuadros decorativos" },
    { nombre: "yodax2", img: img30, cat: "cuadros personales" },
    { nombre: "yodax3", img: img31, cat: "cuadros familiares" },
    { nombre: "munecax2", img: img32, cat: "cuadros familiares" },
    { nombre: "doctora rubia", img: img33, cat: "cuadro de parejas" },
    { nombre: "granjeros", img: img34, cat: "cuadro de parejas" },
    { nombre: "happy", img: img35, cat: "cuadro de parejas" },
    { nombre: "cohala", img: img36, cat: "cuadro de parejas" },
    { nombre: "costurera", img: img37, cat: "cuadro de parejas" },
    { nombre: "costurerax2", img: img38, cat: "amigurumis personalizados" },
    { nombre: "el pidio", img: img39, cat: "amigurumis personalizados" },
    { nombre: "el pidio", img: img40, cat: "amigurumis personalizados" },
    { nombre: "mohana", img: img41, cat: "amigurumis personalizados" },
    { nombre: "mohana", img: img42, cat: "cuadros para" },
    { nombre: "mohana", img: img43, cat: "cuadros para" },
    { nombre: "mohana", img: img44, cat: "cuadros para" },
    { nombre: "mohana", img: img45, cat: "cuadros para" },
    { nombre: "mohana", img: img46, cat: "cuadros para" },
    { nombre: "mohana", img: img47, cat: "cuadros para" },
    { nombre: "mohana", img: img48, cat: "llaveros personalizados" },
    { nombre: "mohana", img: img49, cat: "llaveros personalizados" },
    { nombre: "mohana", img: img50, cat: "llaveros personalizados" },
    { nombre: "mohana", img: img51, cat: "llaveros personalizados" },
    { nombre: "mohana", img: img52, cat: "llaveros personalizados" },
    { nombre: "mohana", img: img53, cat: "llaveros personalizados" },
    { nombre: "mohana", img: img54, cat: "captus amigurumis" },
    { nombre: "mohana", img: img55, cat: "captus tejidos pequenos" },
    { nombre: "mohana", img: img56, cat: "captus tejidos pequenos" },
    { nombre: "mohana", img: img57, cat: "captus grandes a crochet" },
    { nombre: "mohana", img: img58, cat: "captus grandes a crochet" },
    { nombre: "mohana", img: img59, cat: "cuadros decorativos para el hogar" },
    { nombre: "mohana", img: img60, cat: "cuadros decorativos para el hogar" },
    { nombre: "mohana", img: img61, cat: "cuadros decorativos para el hogar" },
    { nombre: "mohana", img: img62, cat: "Decoraciones tejidas temática café" },
    { nombre: "mohana", img: img63, cat: "Decoraciones tejidas temática café" },
    { nombre: "mohana", img: img64, cat: "Decoraciones tejidas temática café" },
    { nombre: "mohana", img: img65, cat: "Amigurumis especiales" },
    { nombre: "mohana", img: img66, cat: "Amigurumis especiales" },
    { nombre: "mohana", img: img67, cat: "Amigurumis especiales" },
    { nombre: "mohana", img: img68, cat: "Amigurumis especiales" },
    { nombre: "mohana", img: img69, cat: "Amigurumis especiales" },
    { nombre: "mohana", img: img70, cat: "" },
    { nombre: "mohana", img: img71, cat: "Frascos decorados a crochet" },
    { nombre: "mohana", img: img72, cat: "Frascos decorados a crochet" },
    { nombre: "mohana", img: img73, cat: "Frascos decorados a crochet" },
    { nombre: "mohana", img: img74, cat: "Frascos decorados a crochet" },
    { nombre: "mohana", img: img75, cat: "Flores decorativas macetas pequeñas " },
    { nombre: "mohana", img: img76, cat: "Flores decorativas macetas pequeñas " },
    { nombre: "mohana", img: img77, cat: "Flores decorativas macetas pequeñas " },
    { nombre: "mohana", img: img78, cat: "Flores decorativas macetas pequeñas " },
    { nombre: "mohana", img: img79, cat: "Flor invertida" },
    { nombre: "mohana", img: img80, cat: "Flor invertida" },
    { nombre: "mohana", img: img81, cat: "Flor invertida" },
    { nombre: "mohana", img: img82, cat: "Flor invertida" },
    { nombre: "mohana", img: img83, cat: "Suculentas" },
    { nombre: "mohana", img: img84, cat: "Suculentas" },
    { nombre: "mohana", img: img85, cat: "Suculentas" },
    { nombre: "mohana", img: img86, cat: "Suculentas" },
    { nombre: "mohana", img: img87, cat: "Terrarios a crochet" },
    { nombre: "mohana", img: img88, cat: "Terrarios a crochet" },
    { nombre: "mohana", img: img89, cat: "Terrarios a crochet" },
    { nombre: "mohana", img: img90, cat: "Terrarios a crochet" },
    { nombre: "mohana", img: img91, cat: "Flores decorativas" },
    { nombre: "mohana", img: img92, cat: "Flores decorativas" },
    { nombre: "mohana", img: img93, cat: "Flores decorativas" },
    { nombre: "mohana", img: img94, cat: "Flores decorativas" },
    { nombre: "mohana", img: img95, cat: "Flores decorativas" },
    { nombre: "mohana", img: img96, cat: "Flores decorativas" },
    { nombre: "mohana", img: img97, cat: "Flores decorativas" },
    { nombre: "mohana", img: img98, cat: "Marcadores para libros" },
    { nombre: "mohana", img: img99, cat: "Marcadores para libros" },
    { nombre: "mohana", img: img100, cat: "Marcadores para libros" },
    { nombre: "mohana", img: img101, cat: "Marcadores para libros" },
    { nombre: "mohana", img: img102, cat: "Marcadores para libros" },
    { nombre: "mohana", img: img103, cat: "Marcadores para libros" },
    { nombre: "mohana", img: img104, cat: "Marcadores para libros" },
    { nombre: "mohana", img: img105, cat: "Llaveros" },
    { nombre: "mohana", img: img106, cat: "Llaveros" },
    { nombre: "mohana", img: img107, cat: "Llaveros" },
    { nombre: "mohana", img: img108, cat: "Llaveros" },
    { nombre: "mohana", img: img109, cat: "Llaveros" },
    { nombre: "mohana", img: img110, cat: "Llaveros" },
    { nombre: "mohana", img: img111, cat: "Llaveros" },
    { nombre: "mohana", img: img112, cat: "Decoraciones para estetoscopio" },
    { nombre: "mohana", img: img113, cat: "Decoraciones para estetoscopio" },
    { nombre: "mohana", img: img114, cat: "Decoraciones para estetoscopio" },
    { nombre: "mohana", img: img115, cat: "Decoraciones para estetoscopio" },
    { nombre: "mohana", img: img116, cat: "Decoraciones para estetoscopio" },
    { nombre: "mohana", img: img117, cat: "Decoraciones para estetoscopio" },
    { nombre: "mohana", img: img118, cat: "Decoraciones para estetoscopio" },
    { nombre: "mohana", img: img119, cat: "Llaveros de ojos turcos" },
    { nombre: "mohana", img: img120, cat: "Llaveros de ojos turcos" },
    { nombre: "mohana", img: img121, cat: "Llaveros de ojos turcos" },
    { nombre: "mohana", img: img122, cat: "Llaveros de ojos turcos" },
    { nombre: "mohana", img: img123, cat: "Llaveros de ojos turcos" },
    { nombre: "mohana", img: img124, cat: "Llaveros de ojos turcos" },
    { nombre: "mohana", img: img125, cat: "Llaveros de ojos turcos" },
    { nombre: "mohana", img: img126, cat: "Llaveros de ojos turcos" },
    { nombre: "mohana", img: img127, cat: "Llaveros de ojos turcos" },
    { nombre: "mohana", img: img128, cat: "Llaveros de ojos turcos" },
    { nombre: "mohana", img: img129, cat: "Carteras medíanas" },
    { nombre: "mohana", img: img130, cat: "Bolsos para móviles" },
    { nombre: "mohana", img: img131, cat: "Bolsos para móviles" },
    { nombre: "mohana", img: img132, cat: "Bolsos para móviles" },
    { nombre: "mohana", img: img133, cat: "Bolsos para móviles" },
    { nombre: "mohana", img: img134, cat: "Bolsos para móviles" },
    { nombre: "mohana", img: img135, cat: "Bolsos para móviles" },
    { nombre: "mohana", img: img136, cat: "Bolsos para móviles" },
    { nombre: "mohana", img: img137, cat: "Bolsos para móviles" },
    { nombre: "mohana", img: img138, cat: "Bolsos para móviles" },
    { nombre: "mohana", img: img139, cat: "Bolsos para móviles" },
    { nombre: "mohana", img: img140, cat: "Bolsos para móviles" },
    { nombre: "mohana", img: img141, cat: "Bolsos para móviles" },
    { nombre: "mohana", img: img142, cat: "Bolsos para móviles" },
    { nombre: "mohana", img: img143, cat: "Bolsos para móviles" },
    { nombre: "mohana", img: img144, cat: "Aretes tejidos" },
    { nombre: "mohana", img: img145, cat: "Aretes tejidos" },
    { nombre: "mohana", img: img146, cat: "Aretes tejidos" },
    { nombre: "mohana", img: img147, cat: "Aretes tejidos" },
    { nombre: "mohana", img: img148, cat: "Aretes tejidos" },
    { nombre: "mohana", img: img149, cat: "Aretes tejidos" },
    { nombre: "mohana", img: img150, cat: "Aretes tejidos" },
    { nombre: "mohana", img: img151, cat: "Aretes tejidos" },
    { nombre: "mohana", img: img152, cat: "Aretes tejidos" },
    { nombre: "mohana", img: img153, cat: "Aretes tejidos" },
    { nombre: "mohana", img: img154, cat: "Aretes tejidos" },
    { nombre: "mohana", img: img155, cat: "Aretes tejidos" },
    { nombre: "mohana", img: img156, cat: "Aretes tejidos" },
    { nombre: "mohana", img: img157, cat: "Aretes tejidos" },
    { nombre: "mohana", img: img158, cat: "Aretes tejidos" },
    { nombre: "mohana", img: img159, cat: "Aretes tejidos" },
    { nombre: "mohana", img: img160, cat: "Aretes tejidos" },
    { nombre: "mohana", img: img161, cat: "Aretes tejidos" },
    { nombre: "mohana", img: img162, cat: "Aretes tejidos" },
    { nombre: "mohana", img: img163, cat: "Aretes tejidos" },
    { nombre: "mohana", img: img164, cat: "Aretes tejidos" },
    { nombre: "mohana", img: img165, cat: "Aretes tejidos" },
    { nombre: "mohana", img: img166, cat: "Amigurumis medianos" },
    { nombre: "mohana", img: img167, cat: "Amigurumis medianos" },
    { nombre: "mohana", img: img168, cat: "Amigurumis medianos" },
    { nombre: "mohana", img: img169, cat: "Amigurumis medianos" },
    { nombre: "mohana", img: img170, cat: "Amigurumis medianos" },
    { nombre: "mohana", img: img171, cat: "Amigurumis medianos" },
    { nombre: "mohana", img: img172, cat: "Amigurumis medianos" },
    { nombre: "mohana", img: img173, cat: "Amigurumis medianos" },
    { nombre: "mohana", img: img174, cat: "Amigurumis medianos" },
    { nombre: "mohana", img: img175, cat: "Amigurumis medianos" },
    { nombre: "mohana", img: img176, cat: "Amigurumis medianos" },
    { nombre: "mohana", img: img177, cat: "Amigurumis medianos" },
    { nombre: "mohana", img: img178, cat: "Amigurumis medianos" },
    { nombre: "mohana", img: img179, cat: "Amigurumis medianos" },
    { nombre: "mohana", img: img180, cat: "Amigurumis medianos" },
    { nombre: "mohana", img: img181, cat: "Amigurumis medianos" },
    { nombre: "mohana", img: img182, cat: "Amigurumis medianos" },
    { nombre: "mohana", img: img183, cat: "Amigurumis medianos" },
    { nombre: "mohana", img: img184, cat: "Amigurumis medianos" },
    { nombre: "mohana", img: img185, cat: "Amigurumis pequeños" },
    { nombre: "mohana", img: img186, cat: "Amigurumis pequeños" },
    { nombre: "mohana", img: img187, cat: "Amigurumis pequeños" },
    { nombre: "mohana", img: img188, cat: "Amigurumis pequeños" },
    { nombre: "mohana", img: img189, cat: "Amigurumis pequeños" },
    { nombre: "mohana", img: img190, cat: "Amigurumis pequeños" },
    { nombre: "mohana", img: img191, cat: "Amigurumis pequeños" },
    { nombre: "mohana", img: img192, cat: "Amigurumis pequeños" },
    { nombre: "mohana", img: img193, cat: "Amigurumis pequeños" },
    { nombre: "mohana", img: img194, cat: "Amigurumis pequeños" },
    { nombre: "mohana", img: img195, cat: "Amigurumis pequeños" },
    { nombre: "mohana", img: img196, cat: "Amigurumis pequeños" },
    { nombre: "mohana", img: img197, cat: "Amigurumis grandes" },
    { nombre: "mohana", img: img198, cat: "Amigurumis grandes" },
    { nombre: "mohana", img: img199, cat: "Amigurumis grandes" },
    { nombre: "mohana", img: img200, cat: "Amigurumis grandes" },
    { nombre: "mohana", img: img201, cat: "Amigurumis grandes" },
    { nombre: "mohana", img: img202, cat: "Amigurumis grandes" },
    { nombre: "mohana", img: img203, cat: "Amigurumis grandes" },
    { nombre: "mohana", img: img204, cat: "Amigurumis grandes" },
    { nombre: "mohana", img: img205, cat: "Amigurumis grandes" },
    { nombre: "mohana", img: img206, cat: "Amigurumis grandes" },
    { nombre: "mohana", img: img207, cat: "Amigurumis grandes" },
    { nombre: "mohana", img: img208, cat: "Amigurumis grandes" },
    { nombre: "mohana", img: img209, cat: "Amigurumis grandes" },
    { nombre: "mohana", img: img210, cat: "Amigurumis grandes" },
    { nombre: "mohana", img: img211, cat: "Amigurumis promedio" },
    { nombre: "mohana", img: img212, cat: "Amigurumis promedio" },
    { nombre: "mohana", img: img213, cat: "Amigurumis promedio" },
    { nombre: "mohana", img: img214, cat: "Amigurumis promedio" },
    { nombre: "mohana", img: img215, cat: "Amigurumis promedio" },
    { nombre: "mohana", img: img216, cat: "Amigurumis promedio" },
    { nombre: "mohana", img: img217, cat: "Amigurumis promedio" },
    { nombre: "mohana", img: img218, cat: "Amigurumis promedio" },
    { nombre: "mohana", img: img219, cat: "Amigurumis promedio" },
    { nombre: "mohana", img: img220, cat: "Amigurumis promedio" },
    { nombre: "mohana", img: img221, cat: "Amigurumis promedio" },
    { nombre: "mohana", img: img222, cat: "Amigurumis promedio" },
  ];

  

  const subcate = [
    { nombre: "amigurumis pequeños", padre: "Amigurumis" },
    { nombre: "amigurumis grandes", padre: "Amigurumis" },
    { nombre: "amigurumis medianos", padre: "Amigurumis" },
    { nombre: "amigurumis promedios", padre: "Amigurumis" },
    { nombre: "amigurumis especiales", padre: "Amigurumis" },
    { nombre: "tulipanes en macetas y bucaros", padre: "Para El Hogar" },
    { nombre: "terrarios a crochet", padre: "Para El Hogar" },
    { nombre: "suculentas a crochet", padre: "Para El Hogar" },
    { nombre: "frascos decorados a crochet", padre: "Para El Hogar" },
    { nombre: "flores decorativas (búcaros pequeños)", padre: "Para El Hogar" },
    { nombre: "flores decorativas (macetas pequeñas)", padre: "Para El Hogar" },
    { nombre: "flores decorativas (macetas medianas)", padre: "Para El Hogar" },
    { nombre: "flores decorativas (macetas grandes)", padre: "Para El Hogar" },
    { nombre: "flor invertida", padre: "Para El Hogar" },
    { nombre: "decoraciones tejidas tematica café", padre: "Para El Hogar" },
    { nombre: "caudros decorativos para el hogar", padre: "Para El Hogar" },
    { nombre: "cactus tejios pequeños", padre: "Para El Hogar" },
    { nombre: "cactus grandes a crochet", padre: "Para El Hogar" },
    { nombre: "cactus amigurumi", padre: "Para El Hogar" },
    { nombre: "llaveros", padre: "Personalizar" },
    { nombre: "cuadros personales", padre: "Personalizar" },
    { nombre: "cuadros para bebes", padre: "Personalizar" },
    { nombre: "cuadros familiares", padre: "Personalizar" },
    { nombre: "cuadros de parejas", padre: "Personalizar" },
    { nombre: "amigurumis personalizado", padre: "Personalizar" },
    { nombre: "pareja de cactus", padre: "Especiales Para Parejas" },
    { nombre: "escultura de enamorados", padre: "Especiales Para Parejas" },
    {
      nombre: "cuadros decorativos para parejas",
      padre: "Especiales Para Parejas",
    },
    { nombre: "marcadores para libros", padre: "Accesorios" },
    { nombre: "llaveros", padre: "Accesorios" },
    { nombre: "decoraciones para estetoscopios", padre: "Accesorios" },
    { nombre: "coleccion de llaveros de ojos turcos", padre: "Accesorios" },
    { nombre: "carteras medianas", padre: "Accesorios" },
    { nombre: "bolsos para moviles", padre: "Accesorios" },
    { nombre: "aretes tejidos", padre: "Accesorios" },
    {
      nombre: "cuadros decorativos para habitaciones",
      padre: "Para Los Pequeños",
    },
    { nombre: "cintillos apar niñas", padre: "Para Los Pequeños" },
    { nombre: "carruseles para la cuna del bebe", padre: "Para Los Pequeños" },
  ];

  // funciones
  const cambio = (e) => {
    console.log(cate);
    setCate(String(e.target.firstChild.nodeValue));
    console.log(cate);
  };

  const abrir = (e) => {
    cambio(e);
    refmodal.current.classList.add("mostrar");
    // setSubcat(cate);
    setPosi(window.scrollY);
    setTimeout(arriba, 100);
  };

  const cambiar = (e) => {
    cerrar();
    console.log(subcat);
    setSubcat(e.target.firstChild.nodeValue);
    console.log(subcat);
  }
  

  const arriba = () => {
    window.scroll(0, 0);
  };

  const abajo = () => {
    window.scroll(0, posi);
  };

  const cerrar = () => {
    refmodal.current.classList.remove("mostrar");
    setTimeout(abajo, 100);
  };

  // use ref
  const refmodal = useRef();
  const subme = useRef();

  // use state
  const [cate, setCate] = useState("Amigurumis");
  const [subcat, setSubcat] = useState("amigurumis promedios");
  const [mostra, setMostra] = useState(
    subcate
      .filter((valor) => valor.padre == cate)
      .map((valor) => (
        <li
          key={valor.nombre}
          onClick={cambiar}
          className="subMenu_ul spr arial texto botones__cont"
        >
          {valor.nombre}
        </li>
      ))
  );
  const [posi, setPosi] = useState(0);
  const [productosA, setProductosA] = useState(
    productos
      .filter((valor) => valor.cat == subcat)
      .map((valor) => (
        <div className="card spr" key={valor.img}>
          <img className="card__img" src={valor.img} alt="" />
          <div className="card__content">
            <p className="card__text text">{valor.nombre}</p>
            <p className="card__text text">Precio</p>
            <p className="abrirModal" onClick={abrir}>
              <svg
                fill="rgb(102, 204, 102)"
                xmlns="http://www.w3.org/2000/svg"
                width="3vw"
                height="3vw"
                viewBox="0 0 24 24"
              >
                <path d="M21 4H2v2h2.3l3.28 9a3 3 0 0 0 2.82 2H19v-2h-8.6a1 1 0 0 1-.94-.66L9 13h9.28a2 2 0 0 0 1.92-1.45L22 5.27A1 1 0 0 0 21.27 4 .84.84 0 0 0 21 4zm-2.75 7h-10L6.43 6h13.24z" />
                <circle cx="10.5" cy="19.5" r="1.5" />
                <circle cx="16.5" cy="19.5" r="1.5" />
              </svg>
            </p>
          </div>
        </div>
      ))
  );

  useEffect(() => {
    setProductosA(
      productos
        .filter((valor) => valor.cat == subcat)
        .map((valor) => (
          <div className="card spr" key={valor.img}>
            <img className="card__img" src={valor.img} alt="" />
            <div className="card__content">
              <p className="card__text text">{valor.nombre}</p>
              <p className="card__text text">Precio</p>
              <p className="abrirModal" onClick={abrir}>
                <svg
                  fill="rgb(102, 204, 102)"
                  xmlns="http://www.w3.org/2000/svg"
                  width="3vw"
                  height="3vw"
                  viewBox="0 0 24 24"
                >
                  <path d="M21 4H2v2h2.3l3.28 9a3 3 0 0 0 2.82 2H19v-2h-8.6a1 1 0 0 1-.94-.66L9 13h9.28a2 2 0 0 0 1.92-1.45L22 5.27A1 1 0 0 0 21.27 4 .84.84 0 0 0 21 4zm-2.75 7h-10L6.43 6h13.24z" />
                  <circle cx="10.5" cy="19.5" r="1.5" />
                  <circle cx="16.5" cy="19.5" r="1.5" />
                </svg>
              </p>
            </div>
          </div>
        ))
    );
  }, [cate]);

  useEffect(() => {
    setMostra(subcate
      .filter((valor) => valor.padre == cate)
      .map((valor) => (
        <li
          key={valor.nombre}
          onClick={cambiar}
          className="subMenu_ul spr arial texto botones__cont"
        >
          {valor.nombre}
        </li>
      )));
  }, [cate]);

  return (
    <div className="containerCatalogo">
      <h2 className="subTitle spr">Catálogo</h2>
      <p className="text spr">Descubra nuestros maravillósos productos</p>
      <br />
      <div className="botones spr">
        <div className="botones__cont spr arial texto">
          <p onClick={abrir} className="peque">
            Amigurumis
          </p>
        </div>
        <div className="botones__cont spr arial texto">
          <p onClick={abrir} className="peque">
            Personalizar
          </p>
        </div>
        <div className="botones__cont spr arial texto">
          <p onClick={abrir} className="peque">
            Para El Hogar
          </p>
        </div>
        <div className="botones__cont spr arial texto">
          <p onClick={abrir} className="peque">
            Especiales Para Parejas
          </p>
        </div>
        <div className="botones__cont spr arial texto">
          <p onClick={abrir} className="peque">
            Accesiorios
          </p>
        </div>
        <div className="botones__cont spr arial texto">
          <p onClick={abrir} className="peque">
            Para Los Pequeños
          </p>
        </div>
      </div>
      <p className="text subrayado spr">{cate}</p>
      <div className="cardSection">
        <div className="bg"></div>
        <div className="bg bg2"></div>
        <div className="bg bg3"></div>
        {productosA}
        <div className="modalContainer" ref={refmodal}>
          <div className="modal">
            <button className="cerrarModal" onClick={cerrar}>
              X
            </button>
            <ul className="submenu">{mostra}</ul>
            <button className="botonModal">continuar</button>
          </div>
        </div>
      </div>
      <div className="layf__marca spr">
        <img src={imglayf} alt="" className="layf" />
      </div>
    </div>
  );
};

export default Catalogo;
