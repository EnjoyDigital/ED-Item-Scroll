ED Item Scroll
=========
jQuery plugin used for showing items when scrolling down a page

###How to use

Include ED Item Scroll

```html
<script src="js/edItemScroll.min.js"></script>
```

###Create your items

```html
<div class="container">
    <div class="item"></div>
    <div class="item"></div>
</div>
```

###Initialise the plugin

```html
<script>
$(function(){
	$('.container .item').edItemScroll();
});
</script>
```

###Options

<table>
	<tr>
		<td><strong>Option</strong></td>
		<td><strong>Default</strong></td>
		<td><strong>Description</strong></td>
	</tr>
	<tr>
		<td>effect</td>
		<td>opacity</td>
		<td>'opacity' or 'show' - opacity will keep the page height, show will bring them in 1 by 1</td>
	</tr>
	<tr>
		<td>speed</td>
		<td>400</td>
		<td>Speed to handle transition</td>
	</tr>
	<tr>
		<td>callback</td>
		<td></td>
		<td>Callback function fired after item is shown</td>
	</tr>
</table>
