$(document.header).ready(function(){var t=window.location.pathname,o=parseInt(t.substring(t.lastIndexOf("/")+1));t=="/html_css/"+o&&$(".noactive-html").addClass("active-html"),t=="/javascript/"+o&&$(".noactive-js").addClass("active-js"),t=="/ruby/"+o&&$(".noactive-ruby").addClass("active-ruby"),t=="/void/"+o&&$(".noactive-void").addClass("active-void")}),$(document).ready(function(){$(".search-btn").click(function(t){$(".form-search-item").fadeToggle("fast"),$("input:text:visible:first").focus(),t.stopPropagation()}),$(".form-search-item").click(function(t){t.stopPropagation()}),$(document).click(function(){$(".form-search-item").fadeOut("fast")}),$(document).keyup(function(t){27===t.keyCode&&$(".form-search-item").fadeOut("fast")})}),$(document).ready(function(){$(".mobile-button").click(function(t){$(".mobile-menu").slideToggle("slow"),t.stopPropagation()}),$(".mobile-menu").click(function(t){t.stopPropagation()}),$(document).click(function(){$(".mobile-menu").slideUp("slow")})}),$(document).ready(function(){$(".all-tags").bind("keyup",function(t){var o=$(this);$(o).val($(o).val().toLowerCase().trim().replace(","," ")),188===t.keyCode?$(o).addClass("tag-link-form"):$(o).removeClass("tag-link-form")})});