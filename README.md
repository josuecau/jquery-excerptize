# jQuery Excerptize
Simple plugin for turning longer text into excerpts.

##What does it do?
This plugin will take a full text passage, create an excerpt, and add **view more/view less** links.  It's a simple alternative to server based excerpt creation (i.e, WordPress' **the_excerpt()**) so that the full excerpt can be indexed by search engines and provide the desired user experience at the same time.

##What's up with 'the flicker'?
At page load, you may notice a flicker, where the full text is displayed for a split second, and then quickly 'excerptized'.  This is because the element is bound after page load, so it is initially visible.  One option to fix this, is to make the element hidden.  Excerptize will automatically make the excerpt visible after binding.

##Example Usage
````
<p class="excerptize">
Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
Aenean dignissim urna eu nisl ornare ultrices. Vivamus eu 
leo tortor. 
</p>

<script src="https://code.jquery.com/jquery-2.1.4.min.js"></script>
<script src="js/excerptize.js"></script>
<script>
$(document).ready(function(){

  // default 
	$('.excerptize').excerptize();
	
	// with custom options
	$('.excerptize').excerptize({
	  numberOfCharacters:20, 
	  cutOffAtWord:false, 
	  tags:'div',
	  showMoreText:'show more',
	  showLessText:'show less'
	  });
	
});
````
