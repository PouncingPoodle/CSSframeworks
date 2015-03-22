
(function(){
    
    var app = angular.module('airbnb', []);
    
    app.controller('HomeController', function() {
        this.items = ratings;
    });

    app.controller('PanelController', function()
    {
        this.tab = 0;

        this.changeTab = function(newTab)
        {
            this.tab = newTab;
        };
        this.isActive = function(argTab)
        {
            return this.tab === argTab;
        };
    });

    app.controller("FeedbackController", function(){
        this.ratings = ratings;
        this.rating={};

        this.addRating = function()
        {
            this.ratings.push(this.rating);
            this.rating = {};
        };
    });

    var ratings = [
        {
            category: "Website",
            stars: 5,
            description: "Loving the Bootstrap!",
            email:"me@gmail.com"
        },{
            category: "Listings",
            stars: 3,
            description: "Loving travel!",
            email:"you@gmail.com"
        }
    ];
    
    app.controller("AdvertController", function(){
        this.adverts = adverts;
        this.advert={};

        this.addAdvert = function()
        {
            this.adverts.push(this.advert);
            this.advert = {};
        };
    });

    var adverts = [
        {
            title: "Beautiful Studio in Quartier Latin",
            category: "Paris",
            email: "quartier@gmail.com",
            price:"R 2 000",
            description:"One big room with a 2 people lofted bed (160x200cm), a small separated kitchen, and a brand new bathroom with shower, restrooms, washing machine and drying machine !"
        }
    ];

})();
