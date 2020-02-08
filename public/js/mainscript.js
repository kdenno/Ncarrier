;
(function($) {
    $(document).ready(function() {

        var fieldsetCount = $('#formEl').children().length;
        var current = 2;
        var stepsWidth = 0;
        var widths = [];
        
        var sidewidth = $('.sideA').width();
        var sideheight = $('.sideA').height();
        $('#map_canvas').width(sidewidth).height((sideheight - 52));
        $('.bookbtn').on('click', function() {

            $('#navigation ul').find('li').removeClass('selected');
            const bookli = $('#navigation ul').find('li')[2];
            moveContent(2);
            bookli.classList.add('selected');
        });
        $('#steps .step').each(function(i) {
            var $step = $(this);
            widths[i] = stepsWidth;
            stepsWidth += $step.width();

        });
        $('#steps').width(stepsWidth);
        $(window).on('load', moveContent(current));
        $('#navigation a').on('click', function(e) {
            var $this = $(this);
            $this.closest('ul').find('li').removeClass('selected');
            $this.parent().addClass('selected');
            current = $this.parent().index();
            if (current !== 2) {

                $('#mapdiv').removeClass('showmap');

            }
            moveContent(current);

            e.preventDefault();

        });
        
        $(document).on('keydown', function(e) {
            if (e.keyCode == 9) {
                return false;
                e.preventDefault();
            };
        });


        function moveContent(currentstep) {
            $('#steps').stop().animate({
                marginLeft: '-' + widths[currentstep] + 'px'
            }, 500);

        }

       

        
        $('.sendmsgbtn').on('click', function() {
            $('.pinputs').each(function() {
                if ($(this).val() == '') {
                    alerts('error','Fill up empty field', 'red');
                    exit();
                };

            });
            var self = $(this);
            var rname = $('#rname').val();
            var remail = $('#remail').val();
            var rnum = $('#rnum').val();
            var message = $('#message').val();
            $.ajax({
                url: nmailAjax.ajaxurl,
                type: 'POST',
                data: {
                    rname: rname,
                    remail: remail,
                    rnum: rnum,
                    message: message,
                    honeydp: honeydp,
                    action: 'send_nmail',
                    security: nmailAjax.security
                },
                beforeSend: function() {
                    self.html('Sending Message...');
                },
                success: function(response) {
                    $data = $(response);
                    $('#rname').val('');
                    $('#remail').val('');
                    $('#rnum').val('');
                    $('#message').val('');
                    self.html('SEND MESSAGE');
                    alerts('success','Message Sent', '#233254');
                },
                error: function(response) {
                    alerts('error', 'Failed to Send mail', 'red')
                    
                }

            })
        });
        $('.sendbtn').on('click', function() {
            $('.dinputs').each(function() {
                if ($(this).val() == '') {
                    alerts('error', 'Fill up empty field', 'red');
                    exit();
                };

            });
            var self = $(this);
            var fname = $('#fname').val();
            var lname = $('#lname').val();
            var pnum = $('#pnum').val();
            var district = $('#districts').val();

            $.ajax({
                url: nmailAjax.ajaxurl,
                type: 'POST',
                data: {
                    fname: fname,
                    lname: lname,
                    pnum: pnum,
                    district: district,
                    action: 'send_nrequest',
                    honeydp: honeydp,
                    security: nmailAjax.security
                },
                beforeSend: function() {
                    self.html('Sending Request...');
                },
                success: function(response) {
                    $data = $(response);
                    $('#fname').val('');
                    $('#lname').val('');
                    $('#pnum').val('');
                    self.html('SEND REQUEST');
                    alerts('success', 'Request Sent', '#233254');
                },
                error: function(response) {
                    alerts('error', 'Failed to Send Request', 'red')
               
                }

            })
        });
        



    })
})(jQuery);