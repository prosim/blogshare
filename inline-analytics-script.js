// READY JQUERY
(function($){
    // READY DOCUMENT
    $(document).ready(function(){

        // UNAV CLICK TRACKING
        $("#js-unav a").each(function () {
            $(this).bind('click', function() {
                var linkNameUnav = $(this).data('analytics-id') || 'universal_nav:' + $(this).text();
                var tealiumUnav = { linkName: linkNameUnav };
                utag.link( tealiumUnav );
            });
        });

        // TOP TOOLBAR NAV CLICKS
        $(".cb-top-nav li").each(function () {
            $(this).bind('click', function () {
                var linkNameTopNav = 'blog_utilitylinks_' + $(this).text();
                var tealiumTopNav = { linkName: linkNameTopNav };
                utag.link( tealiumTopNav );
            });
        });

        // PROMO HEADER BANNERS
        $("#promoBanner").click(function () {
            var linkNamePromoBanner = 'blog_banner_' + $(this).attr("alt");
            var tealiumPromoBanner = { linkName: linkNamePromoBanner };
            utag.link( tealiumPromoBanner );
        });

        // MAIN NAV MENU
        $(".cb-main-nav li").each(function () {
            $(this).bind('click', function() {
                var linkNameMainNav = 'blog_navigation tab_' + $(this).text();
                var tealiumMainNav = { linkName: linkNameMainNav };
                utag.link( tealiumMainNav );
            });
        });

        // SEARCH BOX LINK
        $("#cb-s-trigger-gen").click(function () {
            var linkNameSearch = 'blog_navigation tab_search box'
            var tealiumSearchLink = { linkName: linkNameSearch };
            utag.link( tealiumSearchLink );
            // Send Search Box Page View
            var utag_search_view = {
                pageName: 'blog:search modal',
                subSection1 : 'user_search',
                templateType : 'blog',
                siteId : 'rei',
                contentType : 'non-commerce',
                currentBreakpoint : window.innerWidth || document.body.clientWidth
            };
            utag.view(utag_search_view);
        });

        // ARTICLE SOCIAL SHARING ICONS
        $(".cb-social-fb").click(function () {
            var linkNameFacebookShare = 'blog_article_share_facebook'
            var tealiumFacebookShare = { linkName: linkNameFacebookShare };
            utag.link( tealiumFacebookShare );
        });
        $(".cb-social-tw").click(function () {
            var linkNameTwitterShare = 'blog_article_share_twitter'
            var tealiumTwitterShare = { linkName: linkNameTwitterShare };
            utag.link( tealiumTwitterShare );
        });
        $(".cb-social-pin").click(function () {
            var linkNamePinterestShare = 'blog_article_share_pinterest'
            var tealiumPinterestShare = { linkName: linkNamePinterestShare };
            utag.link( tealiumPinterestShare );
        });
        $(".cb-social-em").click(function () {
            var linkNameEmailShare = 'blog_article_share_facebook'
            var tealiumEmailShare = { linkName: linkNameEmailShare };
            utag.link( tealiumEmailShare );
        });

        $('[data-action=tealiumAnalytics] a[href]').click(function(event) {
            var tealiumLink = $(this).parents('[data-action=tealiumAnalytics]').data('tealium');
            utag.link( { linkName: tealiumLink } );
        });
        // END OF DOCUMENT
    });
    // END JQUERY
})(jQuery);