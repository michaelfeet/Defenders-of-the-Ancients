const $attribute = $(".attribute");
$attribute.on("change", function () {
    let select = this,
        selected = $("option:selected", this).text(),
        startRemoving = false;

    $attribute.each(function (_, el) {
        if (el === select) {
            startRemoving = true;
            return;
        }

        if (startRemoving) {
            $("option", el).each(function (_, el) {
                let $el = $(el);
                if ($el.text() === selected) {
                    $el.remove();
                }
            });
        }
    });
});

const $ability = $(".ability");
$ability.on("change", function () {
    let select = this,
        selected = $("option:selected", this).text(),
        startRemoving = false;

    $ability.each(function (_, el) {
        if (el === select) {
            startRemoving = true;
            return;
        }

        if (startRemoving) {
            $("option", el).each(function (_, el) {
                let $el = $(el);
                if ($el.text() === selected) {
                    $el.remove();
                }
            });
        }
    });
});