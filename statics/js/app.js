import "@babylonjs/core/Debug/debugLayer";
import "@babylonjs/gui/2D";
import "@babylonjs/inspector";
import "@babylonjs/loaders/";
import "@babylonjs/gui";
import * as GUI from 'babylonjs-gui';
import {Engine, Scene, ArcRotateCamera, Vector3, HemisphericLight, MeshBuilder, SceneLoader} from "@babylonjs/core";

class app {
    constructor() {
        const canvas = document.createElement("canvas");
        canvas.style.width = "100%";
        canvas.style.height = "100%";
        canvas.id = "gameCanvas";
        document.body.appendChild(canvas);

        this.canvas = document.getElementById("gameCanvas");
        this.engine = new BABYLON.Engine(this.canvas, true);
        this.scene = null;
    }

    async createScene() {
        this.scene = new BABYLON.Scene(this.engine);

        const camera = new ArcRotateCamera("Camera", Math.PI / 2, Math.PI / 2, 2, Vector3.Zero(), this.scene);
        camera.attachControl(this.canvas, true);
        const light1 = new HemisphericLight("light1", new Vector3(1, 1, 0), this.scene);
        SceneLoader.ImportMesh("", "", "pizza.glb", this.scene);
        //
        // const advancedTexture = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("myUI");
        // const button1 = BABYLON.GUI.Button.CreateSimpleButton("but1", "Click Me");
        // button1.width = "150px";
        // button1.height = "40px";
        // button1.color = "white";
        // button1.cornerRadius = 20;
        // button1.background = "green";
        // button1.onPointerUpObservable.add(function() {
        //
        //     alert("you did it!");
        // });
        const advancedTexture = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("myUI");
        await advancedTexture.parseFromSnippetAsync("I59XFB#11");
        // advancedTexture.addControl(button1);

        return this.scene;
    }
}

let myApp;
myApp = new app();
const scene = await myApp.createScene();


myApp.engine.runRenderLoop(() => {
    scene.render();
});
