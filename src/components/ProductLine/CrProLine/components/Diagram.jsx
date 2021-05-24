import React, { useEffect } from 'react';

import BpmnJS from "bpmn-js/lib/Modeler";

import "bpmn-js/dist/assets/diagram-js.css";

import "bpmn-js/dist/assets/bpmn-font/css/bpmn-embedded.css";
import "../style.css";

import diagram from "../resources/newDiagram.bpmn";

const Diagram = () => {

    useEffect(() => {
        const container = document.getElementById("diagram");
        let viewer = new BpmnJS({
            container,
            keyboard: {
                bindTo: document
            }
        });
        
        viewer
        .importXML(diagram)
        .then(() => {
            const canvas = viewer.get("canvas");

            canvas.zoom("fit-viewport");
        })
        .catch((err) => console.log(err));
    }, []);

    return (
        <div id="diagram" style={{'height':'60vh', 'marginTop':'100'}}></div>
    );
}

export default Diagram;
