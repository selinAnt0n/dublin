
        $(document).ready(function() {
            $('.minus').click(function () {
                var $input = $(this).parent().find('input');
                var count = parseInt($input.val()) - 1;
                count = count < 1 ? 1 : count;
                if (count < 10){$input.val('0'+count);}
                else $input.val(count);
                $input.change();
                return false;
            });
            $('.plus').click(function () {
                var $input = $(this).parent().find('input');
                var count = parseInt($input.val()) + 1;
                count = count > 20 ? 1 : count;
                if (count < 10) {$input.val('0'+count);}
                else $input.val(count);
                $input.change();
                return false;
            });
        });
