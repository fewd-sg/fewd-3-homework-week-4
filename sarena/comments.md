### Homework Completion
- [x] Use appropriate colors and font styles			
- [ ] Make the header sticky			
- [x] Use transitions on the links and buttons			
- [x] Correctly use JavaScript to show and hide the "Meet Your Match" box and "Create Profile" form		
- [ ] Use a background image for the parent of the "Meet your Match" box
- [x] Correctly style the struck-out text ("taste")			
- [x] Format and indent HTML and CSS consistently

### Homework Comments
- To make your header sticky, simply add `position: fixed` and `top: 0` to your header element

- Also you might wanna use floats to position the logo and navigation

- For **.picture** div, you probably want to set the background image here instead of using an **img** tag.

- Try replacing your email and password fields with `input` elements!

- Instead of three different classes - .column1, 2 and 3, try setting all of them to have the same class. Then you can target 2 of them to have borders using `nth-child` property.

```css
.column:nth-child(1), .column:nth-child(2) {
  border-right: 1px solid #D0D7D9;
}
```
