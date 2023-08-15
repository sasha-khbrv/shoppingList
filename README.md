# Shopping List Test

You can check deployed version [sasha-khbrv.github.io/shoppingList/](https://sasha-khbrv.github.io/shoppingList/)

To run the app in the development mode *npm start* / *yarn start*

## Project Description

This is a shopping list application built with React and TypeScript. State management is handled through Redux and Redux Toolkit. I experimented with the Atomic Design method for structuring the project. To make the styles more manageable and predictable, I adopted a modular approach. A separate CSS variables file maintains design consistency across elements like font sizes, spacing, and colors. I used classnames lib for conditionally joining classNames together.

* The list of items is randomized whenever the page is reloaded. The randomization function is located in *src/helpers/getRandomItems*.
* To change the existing value (name or amount) you can use *Enter* or click outside the field. There will be validation before updating the value. To reset the value to the previous one you can click *Esc*.

### Technologies
React, TypeScript, SCSS, Redux, Redux Toolkit

### External Libraries
Redux, Redux Toolkit, classnames

## Credits
Design - [Data table design components. Free UI Kit](https://www.figma.com/community/file/1021406552622495462/Data-table-design-components.-Free-UI-Kit)

Icons - [iconfinder.com/](https://www.iconfinder.com/)
