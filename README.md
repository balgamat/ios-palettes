# iOS Palettes

> Dictionaries for looking up the standard iOS system colors, both for
`Light` and `Dark` themes in Normal and Vibrant mutations, plus a Gray
palette of 6 grayscale colors..

## Available colors
The colors available are:

* **blue**
* **brown**
* **gray**
* **green**
* **orange**
* **pink**
* **purple**
* **red**
* **yellow**

and also gray shades **1-6**

## Usage
```
import iOSPalettes from 'ios-palettes';
```

and then use it in code

```
const buttonColor = iOSPalettes.Light.Normal.Green;
```

or

```
import { Light } from 'ios-palettes';
```

and respectively

```
const titleColor = Light.Gray[1];
```

