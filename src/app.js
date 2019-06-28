/* eslint max-len: ["error", { "comments": 200 }] */
/* eslint no-unused-vars: ["error", { "varsIgnorePattern": "resizeCanvas || hotKeys || exportFile" }] */

import MainCanvas from './screens/main-canvas/index';
import Frame from './screens/frame/index';
import LoadingSavedData from './components/loading-saved-data';
import ResizeCanvas from './screens/resize-canvas/index';
import Preview from './screens/preview/index';
import Layer from './screens/layer/index';

import ResizeTool from './screens/resize-tool/index';
import ColorPallete from './screens/color-palette/index';

import Pen from './screens/instruments/pen/index';
import Stroke from './screens/instruments/stroke/index';
import Rectangle from './screens/instruments/rectangle/index';
import Move from './screens/instruments/move/index';
import Lighten from './screens/instruments/lighten/index';
import Dithering from './screens/instruments/dithering/index';
import Eraser from './screens/instruments/eraser/index';
import PipetteColor from './screens/instruments/pipette-color/index';
import PaintBucket from './screens/instruments/paint-bucket/index';
import PaintAllPixels from './screens/instruments/paint-all-pixels/index';

import HotKeys from './screens/hotkeys/index';

import ExportFile from './screens/download-file/index';

const canvas = document.querySelector('.main-canvas');

if (canvas) {
  const listComponents = [];
  window.listTools = [];

  const mainCanvas = new MainCanvas(0, 0, Frame);
  listComponents.push({
    component: mainCanvas,
    name: mainCanvas.constructor.name,
  });

  const preview = new Preview(mainCanvas);
  const layer = new Layer(mainCanvas);
  const resizeCanvas = new ResizeCanvas(mainCanvas, LoadingSavedData, layer);

  const colorPallete = new ColorPallete();
  const resizeTool = new ResizeTool();

  const toolPen = new Pen(
    'instrument-item__img_pen',
    mainCanvas,
    colorPallete,
    resizeTool,
  );
  listComponents.push({
    component: toolPen,
    name: toolPen.constructor.name,
  });
  window.listTools.push(toolPen);

  const toolStroke = new Stroke(
    'instrument-item__img_stroke',
    mainCanvas,
    colorPallete,
    resizeTool,
    toolPen,
  );
  listComponents.push({
    component: toolStroke,
    name: toolStroke.constructor.name,
  });
  window.listTools.push(toolStroke);

  const toolRectangle = new Rectangle(
    'instrument-item__img_rectangle',
    mainCanvas,
    colorPallete,
    resizeTool,
    toolPen,
  );
  listComponents.push({
    component: toolRectangle,
    name: toolRectangle.constructor.name,
  });
  window.listTools.push(toolRectangle);

  const toolMove = new Move(
    'instrument-item__img_move',
    mainCanvas,
    colorPallete,
    resizeTool,
  );
  listComponents.push({
    component: toolMove,
    name: toolMove.constructor.name,
  });
  window.listTools.push(toolMove);

  const toolLighten = new Lighten(
    'instrument-item__img_lighten',
    mainCanvas,
    colorPallete,
    resizeTool,
  );
  listComponents.push({
    component: toolLighten,
    name: toolLighten.constructor.name,
  });
  window.listTools.push(toolLighten);

  const toolDithering = new Dithering(
    'instrument-item__img_dithering',
    mainCanvas,
    colorPallete,
    resizeTool,
  );
  listComponents.push({
    component: toolDithering,
    name: toolDithering.constructor.name,
  });
  window.listTools.push(toolDithering);

  const toolEraser = new Eraser(
    'instrument-item__img_eraser',
    mainCanvas,
    colorPallete,
    resizeTool,
  );
  listComponents.push({
    component: toolEraser,
    name: toolEraser.constructor.name,
  });
  window.listTools.push(toolEraser);

  const toolPipetteColor = new PipetteColor(
    'instrument-item__img_pipette',
    mainCanvas,
    colorPallete,
    resizeTool,
  );
  listComponents.push({
    component: toolPipetteColor,
    name: toolPipetteColor.constructor.name,
  });
  window.listTools.push(toolPipetteColor);

  const toolPaintBucket = new PaintBucket(
    'instrument-item__img_bucket',
    mainCanvas,
    colorPallete,
    resizeTool,
  );
  listComponents.push({
    component: toolPaintBucket,
    name: toolPaintBucket.constructor.name,
  });
  window.listTools.push(toolPaintBucket);

  const toolPaintAllPixels = new PaintAllPixels(
    'instrument-item__img_paint-all-pixels',
    mainCanvas,
    colorPallete,
    resizeTool,
  );
  listComponents.push({
    component: toolPaintAllPixels,
    name: toolPaintAllPixels.constructor.name,
  });
  window.listTools.push(toolPaintAllPixels);

  const hotKeys = new HotKeys(listComponents);

  const exportFile = new ExportFile(mainCanvas, preview);
}
