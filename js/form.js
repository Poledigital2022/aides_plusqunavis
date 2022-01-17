(function ($) {
    $(document).ready(function () {

        $.validator.addMethod("email", function(value, element) {
            var returnBool = this.optional(element) || /^[a-zA-Z0-9_\.%\+\-]{2,}@[a-zA-Z0-9\.\-]{2,}\.[a-zA-Z]{2,}$/i.test(value);
            return returnBool;
        }, "Veuillez entrer un email valide");
        $('#form').validate({
            rules: {
                email: {
                     required: true,
                     email: true
                }
            },
            messages: {
                email: {
                    required: "L'email est obligatoire"
                }
            }
        });


        var urlParams = window.location.search;
        if($('#form .query input').length) {
            $('#form .query input').val(urlParams);
        }


        $('#form').on('submit', function(e) {
            e.preventDefault();
            var $form = $(this);
            $.ajax({
                type: 'POST',
                cache: false,
                url: document.location.href + 'actions/submit.php',
                dataType: 'json',
                data: $form.serialize()
            }).complete(function(response) {
                if (response.success) {
                    $form.html('Merci pour votre inscription');
                    //window.location.href = document.location.origin + '/merci.html'; // for prod
                    //window.location.href = document.location.origin + '/2019/quiz-30ma/merci.html'; // for test dev2
                    //window.location.href = document.location.origin + '/quiz-30ma/merci.html'; // for test loc
                }else{
                }
            });

        });


    });
})(jQuery);
