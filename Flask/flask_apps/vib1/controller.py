from model import InputForm
from flask import Flask, render_template, request
from compute import compute
import sys

app = Flask(__name__)

try:
    template_name = sys.argv[1]
except IndexError:
    template_name = 'view_plain'

if template_name == 'view_flask_bootstrap':
    from flask_bootstrap import Bootstrap
    Bootstrap(app)

@app.route('/vib1', methods=['GET', 'POST'])
def index():
    form = InputForm(request.form)
    if request.method == 'POST' and form.validate():
        result = compute(form.A.data, form.b.data,
                         form.w.data, form.T.data)
    else:
        result = None
    print form, dir(form)
    #print form.keys()
    for f in form:
        print f.id
        print f.name
        print f.label

    return render_template(template_name + '.html',
                           form=form, result=result)

if __name__ == '__main__':
    app.run(debug=True)
