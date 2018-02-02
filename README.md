# include-directive-loader



## Usage

### webpack rule
```js
{
  test: /\.glsl$/,
  use: {
    loader: 'include-directive-loader',
  }
}
```
### foo.glsl
```glsl
#include ./noise.glsl

void main() {
}
```

