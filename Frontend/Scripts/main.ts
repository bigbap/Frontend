declare var $;
declare var Mustache;

class Main {
    private $el;

    constructor() { }

    public init() {
        console.log("init");
        this.$el = $("#main_content");

        this.getTemplate().then(template => {
            const templateToLoad = $($.parseHTML(template)).filter("#template2").html();
            this.$el.html(Mustache.render(templateToLoad, {
                HelloWorld: "hey there mutheruckers"
            }));
        }).catch(e => console.log("there was a problem getting template"));
    }

    private async getTemplate(): Promise<any> {
        return new Promise((resolve, reject) => {
            let options = {
                url: "./Templates/Templates",
                type: "GET",
                success: function (data) {
                    resolve(data);
                },
                failure: function () {
                    reject();
                }
            };
            $.ajax(options);
        }); 
    }
}

export { Main };