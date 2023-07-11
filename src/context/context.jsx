import React, { createContext, useState } from 'react'
import mera from "../image/agro-mera.PNG";
import shop from  "../image/shop_mera.PNG"
import cartera from "../image/cartera.png";
import css from "../icons/css.svg";
import express from "../icons/express.svg";
import gcp from "../icons/gcp.svg";
import html from "../icons/html.svg";
import js from "../icons/js.svg";
import jwt from "../icons/jwt.svg";
import mqtt from "../icons/mqtt-logo-transp.svg";
import nginx from "../icons/nginx.svg";
import node from "../icons/node.svg";
import react from "../icons/react.svg";
import vue from "../icons/vue.svg";
import vuetify from "../icons/vuetify.svg";
import tableau from "../icons/tableau.svg";
import sql_server from "../icons/sql_server.svg";
import mysql from "../icons/mysql.svg";
import stripe from "../image/stripe.png";
import git from "../icons/git.svg";
import github from "../icons/git-hub.svg";
import postgre_sql from "../icons/postgresql.svg";
import docker from "../icons/docker.svg";
import php from "../icons/php.svg";
import terminal from "../icons/terminal.svg";
import postman from "../icons/postman.svg";
import bootsrap from "../icons/bootstrap.svg";


const ProviderContext = createContext();

const proyects = [
    {
        title:"Ecommerce (Personal)",
        img:mera,
        type:'Proyecto desde comienzo absoluto',
        link:'',
        text:"Es un proyecto personal enfocado a la venta de elotes  y esquites en una etapa de prueba, dado que falta agregar el metodo de pago en linea para ya pasarlo a produccion. La idea principal es aplicar todos mis conocimientos de backend como: middlewares, autentificacion con jwt y passport, cors, API REST, docker y validaciones por mencioanar algunos",
        icons:[
            {icon:css, alt:"CSS"},
            {icon:html, alt:"HTML"},
            {icon:js, alt:"JavaScript"},
            {icon:node, alt:"NodeJS"},
            {icon:express, alt:"Express JS"},
            {icon:react, alt:"React JS"},
            {icon:jwt, alt:"Json Web Token"},
            {icon:docker, alt:"Docker"},
            {icon:postgre_sql, alt:"Postgre SQL"},
            {icon:git, alt:"Git"},
            {icon:github, alt:"GitHub"},
        ]
    },
    {
        title:"Cartera Turing-IA",
        img:cartera,
        type:'Proyecto desde comienzo absoluto',
        link:'',
        text:"Cartera es un proyecto enfocado al analisis de datos y en el desarrolle la logica de negocio del lado del backend, asi mismo trabaje a profundidad con sql server desplegando vistas, sp, linked servers, jobs y configuraciones del servidor. Por otro lado se crearon dashboards por medio del aplicativo Tableau el cual se conecta a SQL Server que usa y limpia  los datos antes de ser mostrados al usario final",
        icons:[
            {icon:css, alt:"CSS"},
            {icon:html, alt:"HTML"},
            {icon:js, alt:"JavaScript"},
            {icon:node, alt:"Node JS"},
            {icon:express, alt:"Express JS"},
            {icon:react, alt:"React JS"},
            {icon:nginx, alt:"Nginx"},
            {icon:tableau, alt:"Tableau"},
            {icon:sql_server, alt:"SQL Server"},
            {icon:git, alt:"Git"},
            {icon:github, alt:"GitHub"},
        ]
    },
    {
        title:"MERA Shop",
        img:shop,
        type:'Proyecto desde comienzo absoluto',
        link:'https://ingenieriamera.com/inventarios',
        text:"Es una tienda en linea que trabaja en conjunto con STRIPE para hacer la pasarela de pago, el objetivo principal fue actualizar la tienda en linea que se tenia antes echa en prestashop. La gran diferencia era implementar el pago en linea y darle un diseño apropiedo a la imagen de la empresa e incorporar los servicios como impresion 3D o cursos ",
        icons:[
            {icon:css, alt:"CSS"},
            {icon:html, alt:"HTML"},
            {icon:js, alt:"JavaScript"},
            {icon:node, alt:"Node JS"},
            {icon:express, alt:"Express JS"},
            {icon:vue, alt:"Vue JS"},
            {icon:vuetify, alt:"Vuetify"},
            {icon:jwt, alt:"Json Web Token"},
            {icon:stripe, alt:"Stripe"},
            {icon:nginx, alt:"Nginx"},
            {icon:gcp, alt:"GCP"},
            {icon:mysql, alt:"MySQL"},
            {icon:git, alt:"Git"},
            {icon:github, alt:"GitHub"},
        ]
    },
    {
        title:"Agro MERA IoT",
        img:mera,
        type:'Proyecto desde comienzo absoluto',
        link:'http://34.125.8.131:8080/',
        text:"Es una plataforma IOT con aplicacion en invernaderos en donde se tienen funcionalidades como: visualizar la humedad y temperatura en tiempo real, encendido y apagado de balbulas, historios y predicciones. Es importante mencionar que los dispositivos que captan la humenda y tempratura  son desarrollados por MERA y llevan una comunicacion a travez del protocolo MQTT mismos son conectados con la plataforma usando websockets",
        icons:[
            {icon:css, alt:"CSS"},
            {icon:html, alt:"HTML"},
            {icon:js, alt:"JavaScript"},
            {icon:node, alt:"Node JS"},
            {icon:express, alt:"Express JS"},
            {icon:vue, alt:"Vue JS"},
            {icon:vuetify, alt:"Vuetify"},
            {icon:jwt, alt:"Json Web Token"},
            {icon:mqtt, alt:"MQTT"},
            {icon:nginx, alt:"Nginx"},
            {icon:gcp, alt:"GCP"},
            {icon:mysql, alt:"MySQL"},
        ]
    },
]

const frameworks= [
    {icon:vue, alt:"Vue JS"},
    {icon:react, alt:"React JS"},
    {icon:express, alt:"Express JS"},
    {icon:vuetify, alt:"Vuetify"},
    {icon:bootsrap, alt:"Bootsrap"},
]

const languages= [
    {icon:js, alt:"JavaScript"},
    {icon:node, alt:"Node JS"},
    {icon:php, alt:"PHP"},
    {icon:html, alt:"HTML"},
    {icon:css, alt:"CSS"},
]

const bd = [
    {icon:mysql, alt:"MySQL"},
    {icon:sql_server, alt:"SQL Server"},
    {icon:postgre_sql, alt:"Postgre SQL"},
]

const tools =  [
    {icon:git, alt:"Git"},
    {icon:github, alt:"GitHub"},
    {icon:docker, alt:"Docker"},
    {icon:terminal, alt:"Terminal"},
    {icon:postman, alt:"Postman"},
]
const others =  [
    {icon:gcp, alt:"GCP"},
    {icon:nginx, alt:"Nginx"},
    {icon:tableau, alt:"Tableau"},
    {icon:stripe, alt:"Stripe"},
    {icon:mqtt, alt:"Protocolo MQTT"},
]

const personal = [
    {
        title : 'Personal',
        content :{
            paragraph:'Me presento mi nombre es Cristian Espiridion Martinez y soy Ingeniero en Sistemas Computacionales con una pasion en el mundo del desarrollo web. Mi objetivo principal es ser experto en el desarrollo del backend sin embargo no estoy cerrado a poder desarrollar proyectos como fullstack. Los principales conocimientos que puedo resaltar sobre el lado del backend son:',
            list:['Manejo del CORS','HTTP request, response y status codes','Middlewares','Passport y JWT (Autentificacion y verificacion)','ORM','BD vistas, jobs, sentencias JOIN, normalizacion hasta la 4FN','debugging']
        }
    },
    {
        title : 'Educacion',
        content :{
            paragraph:'Durante mi periodo educativo considero que siemprefue una persona bastante seria y sobre todo muy logica,puesto que siempre que tocaban materias referentes a la rama de las matematicas era uno de los  que mas sobresalia. Me gusta poner a prueba mi mente resolviendo problemas logicos y fue alli donde tomela decision de querer estudiar sistemas computaciones. Por otro lado cuento con dos titulos uno por parte del bachillerato tecnologico que  tome y otro por la ingenieria:',
            list:['Tecnico en Informatica - CBT Lic. Mario Colin Sanchez, Atlacomulco','Ingenieria en Sistemas Computacionales - Universidad Politecnica de Atlacomulco']
        }
    },
    {
        title : 'Expreriencia Laboral',
        content :{
            paragraph:'Mi primer incursion al sector laboral fue en el 2022 gracias a una modalidad de educacion DUAL, este permite a los alumnos de los ultimoss cuatrimestres o semestres a poder incorporarse un año en una empresa o microempresa segun los convenios de las universidades. Gracias a esta modalidad fue como pude aprender bastantes conocimientos respecto al entorno web y al mismo tiempo con mi esfuerzo me converti en el encargado del area de sistemas. Las empresas en las que  he estado son las siguientes:',
            list:['Ingenieria MERA 2022-2023 (1 AÑO)', 'Turng-IA 2023-2023 (4 meses)']
        }
    },
    {
        title : 'Aptitudes',
        content :{
            paragraph:'Mis aptitudes se listan a continuacion:',
            list:['Autodidacta','Logico','Resolucion de problemas','Autogestion','Trabajo en equipo','Comunicacion','Liderazgo','Disciplinado','Responsable']
        }
    },
]
const Context = ( {children} ) => {

    const [infoFooter, setInfoFooter]= useState({
        size: 0,
        description : 'Inicio'
    })

    const [infoModal, setInfoModal] = useState(
        {
            title:"",
            img:'',
            type:'',
            link:'',
            text:"",
            icons:[
                {icon:'', alt:""},
            ]
        },
    )
    const [modal,setModal] = useState(false);
    return (
        <ProviderContext.Provider
            value={{
                proyects,
                frameworks,
                languages,
                tools,
                bd,
                others,
                infoFooter,
                setInfoFooter,
                infoModal,
                setInfoModal,
                modal,
                setModal,
                personal
            }}
        >
            { children }
        </ProviderContext.Provider>
    )
}

export { Context, ProviderContext }
