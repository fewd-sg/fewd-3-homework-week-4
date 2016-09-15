### Homework Completion
- [x] Use appropriate colors and font styles			
- [ ] Make the header sticky			
- [ ] Use transitions on the links and buttons			
- [x] Correctly use JavaScript to show and hide the "Meet Your Match" box and "Create Profile" form		
- [x] Use a background image for the parent of the "Meet your Match" box
- [x] Correctly style the struck-out text ("taste")			
- [x] Format and indent HTML and CSS consistently

### Homework Comments
- Instead of repeating the CSS for the three boxes below, simply write one CSS class and apply it to the three boxes. Make your life easier by reusing classes! Here's an example:

```css
.boxes {
  float: left;
  width: 26%;
  padding: 0 35px 0 35px;
}

.boxes + .boxes {
  border-left: 1px solid black;
}
```

- To make your header sticky, simply add `position: fixed` and `top: 0` to your **#top** div

- Add transitions to your links by using the `transition` property. You also have to create a `:hover` state for your links. Shall leave you to google this one :)

- You can replace your email and password fields with `input` elements. Also google this one!
