### Homework Completion
- [x] Use appropriate colors and font styles			
- [x] Make the header sticky			
- [x] Use transitions on the links and buttons			
- [x] Correctly use JavaScript to show and hide the "Meet Your Match" box and "Create Profile" form		
- [x] Use a background image for the parent of the "Meet your Match" box
- [x] Correctly style the struck-out text ("taste")			
- [x] Format and indent HTML and CSS consistently

### Homework Comments
- Using `transition: all` property might be excessive for animating one or two properties (also to think about web performance issues). Thus I'd prefer setting them, like `transition: color .2s ease, transform .2s ease` for example. Unless animating a bunch of properties.

- To center your header elements at the 768 - 1000 breakpoint, I suggest resetting all float properties to none. Then add a `text-align: center` property to the **header** and that should do the trick!

- For your three **aside** elements, try writing one CSS rule for them and apply to all three. Here's an example:

```css
#actions aside {
  float: left;
  width: 33%;
  text-align: justify;
  padding: 10px;
}

#actions aside + aside {
  border-left: 1px dotted #ffb500;
}
```

- Enjoyed grading your work, you really put alot of thought and effort into it! Especially linking each button to the JavaScript functions, and the responsive layout.
