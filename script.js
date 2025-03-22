document.addEventListener("DOMContentLoaded" , function()
{
    let toggle_theme = document.getElementById('toggle_theme');
    if(toggle_theme)
        {
            toggle_theme.addEventListener('click' , function()
        {
            document.body.classList.toggle('dark_mode');
        });
        } 

    let about_me = document.getElementById('about_me');
    let change_para = document.getElementById('change_para');
    if(about_me && change_para)
    {
        change_para.addEventListener('click', function()
    {
        about_me.style.color = about_me.style.color === 'green' ? 'black' : 'green';
    });
    }

    let hide = document.getElementById('hide');
    let abilities = document.getElementById('abilities');
    if(hide && abilities)
    {
        hide.addEventListener('click', function()
    {
        abilities.classList.toggle('hidden');
    });
    }

    let reset = document.getElementById('reset');
    if(reset)
    {
        reset.addEventListener('click' , function()
    {
        location.reload();
    });
    }
});