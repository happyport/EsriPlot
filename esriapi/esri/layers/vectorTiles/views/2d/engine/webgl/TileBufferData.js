// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.30/esri/copyright.txt for details.
//>>built
define("esri/layers/vectorTiles/views/2d/engine/webgl/TileBufferData",["require","exports"],function(f,g){return function(){function d(){this.geometries=[{indexBuffer:void 0,vertexBuffer:{}},{indexBuffer:void 0,vertexBuffer:{}},{indexBuffer:void 0,vertexBuffer:{}},{indexBuffer:void 0,vertexBuffer:{}},{indexBuffer:void 0,vertexBuffer:{}}]}d.deserialize=function(c){for(var a=new d,b=0;5>b;++b){a.geometries[b].indexBuffer=new Uint32Array(c.geometries[b].indexBuffer);a.geometries[b].vertexBuffer={};for(var e in c.geometries[b].vertexBuffer)a.geometries[b].vertexBuffer[e]=
{data:new Uint32Array(c.geometries[b].vertexBuffer[e].data),stride:c.geometries[b].vertexBuffer[e].stride}}return a};d.prototype.serialize=function(){for(var c={geometries:[{indexBuffer:this.geometries[0].indexBuffer.buffer,vertexBuffer:{}},{indexBuffer:this.geometries[1].indexBuffer.buffer,vertexBuffer:{}},{indexBuffer:this.geometries[2].indexBuffer.buffer,vertexBuffer:{}},{indexBuffer:this.geometries[3].indexBuffer.buffer,vertexBuffer:{}},{indexBuffer:this.geometries[4].indexBuffer.buffer,vertexBuffer:{}}]},
a=0;5>a;++a)for(var b in this.geometries[a].vertexBuffer)c.geometries[a].vertexBuffer[b]={data:this.geometries[a].vertexBuffer[b].data.buffer,stride:this.geometries[a].vertexBuffer[b].stride};return c};d.prototype.getBuffers=function(){for(var c=[],a=0;5>a;++a){c.push(this.geometries[a].indexBuffer.buffer);for(var b in this.geometries[a].vertexBuffer)c.push(this.geometries[a].vertexBuffer[b].data.buffer)}return c};return d}()});