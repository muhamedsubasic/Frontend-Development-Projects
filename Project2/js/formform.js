$(document).ready(function () {
    toastr.options = {
        closeButton: true,
        debug: false,
        newestOnTop: false,
        progressBar: true,
        positionClass: "toast-top-right",
        preventDuplicates: false,
        onclick: null,
        showDuration: "200",
        hideDuration: "1000",
        timeOut: "5000",
        extendedTimeOut: "1000",
        showEasing: "swing",
        hideEasing: "linear",
        showMethod: "fadeIn",
        hideMethod: "fadeOut",
    };
    $("#datepicker").datepicker({
        format: "yyyy-mm-dd",
    });

    $("#contactForm").validate({
        rules: {
            name: {
                required: true,
                minlength: 2,
            },
            email: {
                required: true,
                email: true,
            },
            dob: {
                required: true,
                date: true,
            },
            password: {
                required: true,
                minlength: 5,
            },
            confirmPassword: {
                required: true,
                minlength: 5,
                equalTo: "#password",
            },
        },
        messages: {
            name: {
                required: "Please enter your name",
                minlength: "Your name must consist of at least 2 characters",
            },
            email: {
                required: "Please enter your email",
                email: "Please enter a valid email address",
            },
            dob: {
                required: "Please enter your date of birth",
                date: "Please enter a valid date",
            },
            password: {
                required: "Please provide a password",
                minlength: "Your password must be at least 5 characters long",
            },
            confirmPassword: {
                required: "Please provide a password",
                minlength: "Your password must be at least 5 characters long",
                equalTo: "Please enter the same password as above",
            },
        },
        submitHandler: function (form) {
            $.ajax({
                type: "POST",
                url: "",
                data: $(form).serialize(),
                success: function (response) {
                    toastr.success("Data saved", "Success");
                    form.reset();
                },
                error: function (xhr, status, error) {
                    toastr.error("Failed to save data.", "Error");
                    console.error(xhr.responseText);
                },
            });
            return false;
        },
    });
});
