{% extends '../layout.swig' %}

{% block content %}

    <form action="" method="POST">

        <div>
            <label for="title">Title:</label>
            <input type="text" name="title" id="title">
        </div>

        <div>
            <label for="content">內文:</label>
            <textarea name="content" id="content" class="myEditor" cols="30" rows="10"></textarea>
        </div>

        <div>
            <input type="submit"/>
        </div>

    </form>
{% endblock %}


