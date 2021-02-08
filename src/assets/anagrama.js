// /*
//  * Anagrama script file 2021
//  * https://www.anagrama.com/
//  */

$(function () {
    const Util = {
        getSelectorFromElement(element) {
            var selector = element.getAttribute('data-target')
            if (!selector || selector === '#') {
                selector = element.getAttribute('href') || ''
            }

            try {
                return document.querySelector(selector) ? selector : null
            } catch (err) {
                return null
            }
        },
        getIdFromDropdown(element) {
            var selector = element.parentElement.getAttribute("data-id")

            try {
                return document.getElementById(selector) ? document.getElementById(selector) : null
            } catch (err) {
                return null
            }
        }
    }

    // Toggle Classes for [data-toggle=] HTML tags.
    /* PARAMS: 
      class to toggle: data-toggle="class"
      Target to toggle above class: data-target="header, main"
    */
    $(function () {
        $(document).on('click', '[data-toggle="show"]', function (event) {
            // preventDefault only for <a> elements (which change the URL) not inside the collapsible element
            if (event.currentTarget.tagName === 'A' && $(this).data("prevent") != false) {
                event.preventDefault()
            }

            const $trigger = $(this)
            const selector = Util.getSelectorFromElement(this)
            const selectors = [].slice.call(document.querySelectorAll(selector))
            $(selectors).each(function () {
                const $target = $(this)
                const $data = $trigger.data("toggle")
                $target.toggleClass($data)
                const $focus = $trigger.data("focus")
                if ($focus != undefined) {
                    console.log("focus", $focus)
                    $($focus).focus()
                }
            })
        });
    })
})
