console.log('test')

// $(document).ready(function() {
//     $(".attribute").change(function() {
//         // Get the selected value
//         let selected = $("option:selected", $(this)).val();
//         // Get the ID of this element
//         let thisID = $(this).prop("id");
//         // Reset so all values are showing:
//         $(".attribute option").each(function() {
//             $(this).prop("disabled", false);
//         });
//         $(".attribute").each(function() {
//             if ($(this).prop("id") != thisID) {
//                 $("option[value='" + selected + "']", $(this)).prop("disabled", true);
//             }
//         });
//     });
// });

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

// $(document).ready(function() {
//     $(".ability").change(function() {
//         // Get the selected value
//         let selected = $("option:selected", $(this)).val();
//         // Get the ID of this element
//         let thisID = $(this).prop("id");
//         // Reset so all values are showing:
//         $(".ability option").each(function() {
//             $(this).prop("disabled", false);
//         });
//         $(".ability").each(function() {
//             if ($(this).prop("id") != thisID) {
//                 $("option[value='" + selected + "']", $(this)).prop("disabled", true);
//             }
//         });
//     });
// });