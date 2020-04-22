$(function() {
    $('[data-form-type="form"] input,[data-form-type="form"] textarea').jqBootstrapValidation({
        preventSubmit: true,
        submitSuccess: function(form, event) {
            switch($(form).attr('id')) {
                case 'form-login':
                    event.preventDefault()
                    username = $(form).find('input[name=username]').val();
                    password = $(form).find('input[name=password]').val();
                    api.login(username, password).then(function(resp) {
                        showMessage(form);
                        location.reload();
                    }).catch(function(error) {
                        showError(form, error.error);
                    });
                    break;

                case 'form-register':
                    event.preventDefault()
                    username = $(form).find('input[name=username]').val();
                    email = $(form).find('input[name=email]').val();
                    password = $(form).find('input[name=password]').val();
                    api.register(username, email, password).then(function(resp) {
                        showMessage(form);
                        // location.reload();
                        location.hash = '#check-email'
                    }).catch(function(error) {
                        showError(form, error.error);
                    });
                    break;


                default:
                    if (!form.attr('action')) {
                        event.preventDefault();
                        var processorFile = getProcessorPath(form);
                        var formData = {};
                        form.find("input, textarea, option:selected").each(function(e) {
                            var fieldData = $(this).val();
                            var fieldID = $(this).attr('id');
                            if ($(this).is(':checkbox')) {
                                fieldData = $(this).is(":checked");
                            } else if ($(this).is(':radio')) {
                                fieldData = $(this).val() + ' = ' + $(this).is(":checked");
                            } else if ($(this).is('option:selected')) {
                                fieldID = $(this).parent().attr('id');
                            }

                            formData[fieldID] = fieldData;
                        });
                        $.ajax({
                            url: processorFile,
                            type: "POST",
                            data: formData,
                            cache: false,
                            success: function() {
                                if (form.is('[data-success-msg]')) {
                                    showMessage(form);
                                } else {
                                    window.location.replace(form.attr('data-success-url'));
                                }
                                form.trigger("reset");
                            },
                            error: function() {
                                showError(form);
                            },
                        });
                    }
                    break
            }
        },
        filter: function() {
            return $(this).is(":visible");
        },
    });

    function showError(form, message) {
        message = message || form.attr('data-fail-msg')
        if ($('#form-alert').length > 0)
            $('#form-alert').remove();
        form.append("<div id='form-alert' class='mt-2'><div class='alert alert-danger'><button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;</button><strong>" + message + "</strong></div></div>");
    }

    function showMessage(form, message) {
        message = message || form.attr('data-success-msg');
        if ($('#form-alert').length > 0)
            $('#form-alert').remove();
        form.append("<div id='form-alert' class='mt-2'><div class='alert alert-success'><button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;</button><strong>" + message + "</strong></div></div>");
    }
});

// Copied somewhere from GitHub and can be somewhat used (idk but hopefully Solutions will do everything great)
