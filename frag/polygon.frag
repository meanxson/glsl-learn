#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
const float PI = 3.14159265359;

float polygonShape(vec2 position, float radius, float sides){
    position = position * 2.0 - 1.0;
    float angle = atan(position.x, position.y);
    float slice = PI * 2.0 / sides;
    return step(radius, cos(floor(angle / slice) * slice - angle) * length(position));
}

void main() {   
    vec2 position = gl_FragCoord.xy / u_resolution;

    vec3 color = vec3(0.0);

    float polygon = polygonShape(position, 0.6, 6.0);

    color = vec3(polygon);

    gl_FragColor = vec4(color, 1.0);
}
