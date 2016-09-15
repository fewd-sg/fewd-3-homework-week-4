### Homework Completion
- [x] Use appropriate colors and font styles			
- [x] Make the header sticky			
- [x] Use transitions on the links and buttons			
- [x] Correctly use JavaScript to show and hide the "Meet Your Match" box and "Create Profile" form		
- [x] Use a background image for the parent of the "Meet your Match" box
- [ ] Correctly style the struck-out text ("taste")			
- [x] Format and indent HTML and CSS consistently

### Homework Comments
- In some instances, you don't want the header changing height with your hover animation. You could try using `transform` property, here's an example:

```css
a {
  display: block;
  transform: scale(1);
  transition: transform .3s ease;
}

a:hover {
  transform: scale(1.2);
}
```

- Instead of setting `position: absolute` to **main** tag and the child elements, you can set `z-index: 1 (or more)` to the fixed **header** and add `margin-top` to  **main** and move it away from the fixed header.

- For the word **taste**, check out `text-decoration: line-through`

- As for the form, you can replace **box-text** with `input` elements.

- Consider setting a percentage width on each of the box sections in **options** so that they line up.
