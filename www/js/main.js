$(document).ready(function() {	
	$(".bullet-section").click(function (e) {
		var $this = $(this);
		var expanable_block = $this.parent().parent().find(".expandable-block");
		var bullet_disk = $this.find(".bullet-disk");
		var bullet_expanded = $this.find(".bullet-expanded");
		var bullet_collapsed = $this.find(".bullet-collapsed");
		
		if ($this.hasClass("expanded")) {
			bullet_disk.stop().animate({
                left: 2
            }, {
                easing: 'swing'
            });
			setTimeout(function () {
				bullet_collapsed.css("display", "block");
			}, 150);
			$this.removeClass("expanded").addClass("collapsed");
		} else if ($this.hasClass("collapsed")) {
			bullet_disk.stop().animate({
                left: 24
            }, {
                easing: 'swing'
            });	
			setTimeout(function () {
				bullet_collapsed.css("display", "none");
			}, 150);
			$this.removeClass("collapsed").addClass("expanded");
		}
		expanable_block.slideToggle();
		
		if (e && e.preventDefault)
			e.preventDefault();
		return false;
	});
});
