#version 400
uniform vec2 pos;
in vec2 texCoord;
out vec4 fragColor;

void main()
{
  fragColor = vec4(texCoord - pos, 0.0, 1.0);
}
