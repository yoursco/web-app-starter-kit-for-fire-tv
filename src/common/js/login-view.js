/* Login View
 *
 * Handles login view for displaying and resolving Registration Codes
 *
 */

(function (exports) {
    "use strict";

    /**
     * @class LoginView
     * @description Handles registering and authenticating user device
     */
    function LoginView() {

        // mixin inheritance, initialize this as an event handler for these events:
        Events.call(this, ['exit', 'loginStarted', 'loginComplete']);

        //global variables
        this.currentView = null;
        this.regCode = '';
        

        //jquery global variables
        this.$el = null;
        this.el = null;

        this.fadeOut = function () {
            this.$el.css("opacity", "0");
        };

        this.fadeIn = function () {
            this.$el[0].style.opacity = "";
        };
        
        /**
         * Hide this view - use visibility instead of display
         * so that we don't loose any of our dynamic items
         */
        this.hide = function () {
            this.$el[0].style.opacity = "0";
        };

        /**
         * Display this view
         */
        this.show = function () {
            this.$el.css("opacity", "");
        };

        /**
         * Remove the Login element
         */
        this.remove = function () {
            if (this.el) {
                $(this.el).remove();
            }
        };

        /**
         * Maintain the current view for event handling
         */
        this.setCurrentView = function (view) {
            this.currentView = view;
        };

        /**
         * Creates the login-view and attaches it to the application container
         * @param {Element} $el application container
         * @param {String} regCode registration code 
         * 
         */
        this.render = function ($el, regCode) {
            //Make sure we don't already have a full container
            this.remove();
            this.regCode = regCode;

            var html = utils.buildTemplate($("#login-view-template"), {
                regCode: this.regCode
            });

            $el.append(html);
            
            this.trigger("loginStarted");
        };

        this.update = function (regCode) {
            this.regCode = regCode;
        }


        /**
         * Show summary text in the 1D View
         * @param {Number} index number of current element to show data for
         */
        // this.showExtraData = function (index) {
        //     index = index || 0;

        //     //add description
        //     this.$el.find(".one-D-summary-title").html(this.rowElements[index].title);
        //     this.$el.find(".one-D-summary-description").html(this.rowElements[index].description);
        //     this.$el.find("#summary-buttons-container").css("visibility", "visible");
        //     if (this.rowElements[index].type === "video-live") {
        //         if (this.rowElements[index].isLiveNow) {
        //             // add the live icon and replace the pubdate with it in the live case
        //             this.$el.find(".one-D-summary-description").html('<div class="one-D-live-icon" ></div>' +
        //                 '<div>' + this.rowElements[index].description + '</div>');
        //             this.$el.find(".one-D-summary-description").css("margin-top", "-30px");
        //         }
        //         else {
        //             this.$el.find(".one-D-summary-pubdate").html('<span class = "time-upcoming">' + this.rowElements[index].upcomingTime + '</span>');
        //             this.$el.find(".one-D-summary-description").css("margin-top", "");
        //         }
        //     }
        //     else {
        //         if (this.rowElements[index].pubDate) {
        //             this.$el.find(".one-D-summary-pubdate").html(this.rowElements[index].pubDate.toLocaleString());
        //         }
        //         this.$el.find(".one-D-summary-description").css("margin-top", "");
        //     }
        // };

        /**
         * Hide the text in the 1D view when scrolling starts
         */
        // this.hideExtraData = function () {
        //     this.$el.find(".one-D-summary-title").text("");
        //     this.$el.find(".one-D-summary-pubdate").text("");
        //     this.$el.find(".one-D-summary-description").text("");
        //     this.$el.find("#summary-buttons-container").css("visibility", "hidden");
        // };
    }

    exports.LoginView = LoginView;
}(window));
