#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;


void main(){
 vec2 st = gl_FragCoord.zx / u_resolution.xy;

 vec3 firstColor = vec3(0.0, 0.0, 0.0);
 vec3 secondColor = vec3(1.0, 1.0, 1.0);

 float mixValue = distance(st,vec2(0.11,1));
 vec3 color = mix(firstColor,secondColor,mixValue);

 gl_FragColor = vec4(color, mixValue);

}