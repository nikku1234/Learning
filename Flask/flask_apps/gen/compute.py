from numpy import exp, cos, linspace, zeros_like
import matplotlib.pyplot as plt
import os, time, glob, math

def damped_vibrations(t, A, b, w):
    return A*exp(-b*t)*cos(w*t)

def compute_vib(A, b, w, T, resolution=500):
    """Return filename of plot of the damped_vibration function."""
    t = linspace(0, T, resolution+1)
    y = damped_vibrations(t, A, b, w)
    plt.figure()  # needed to avoid adding curves in plot
    plt.plot(t, y)
    plt.title('A=%g, b=%g, w=%g' % (A, b, w))

    # Make Matplotlib write to BytesIO file object and grab
    # return the object's string
    from io import BytesIO
    figfile = BytesIO()
    plt.savefig(figfile, format='png')
    figfile.seek(0)  # rewind to beginning of file
    import base64
    figdata_png = base64.b64encode(figfile.getvalue())
    figfile = BytesIO()
    plt.savefig(figfile, format='svg')
    figfile.seek(0)
    figdata_svg = '<svg' + figfile.getvalue().split('<svg')[1]
    figdata_svg = unicode(figdata_svg,'utf-8')
    return figdata_png, figdata_svg

def gamma_density(x, a, h, A):
    # http://en.wikipedia.org/wiki/Gamma_distribution
    xA = x/float(A)
    return abs(h)/(math.gamma(a)*A)*(xA)**(a*h-1)*exp(-xA**h)

def gamma_cumulative(x, a, h, A):
    # Integrate gamma_density using the Trapezoidal rule.
    # Assume x is array.
    g = gamma_density(x, a, h, A)
    r = zeros_like(x)
    for i in range(len(r)-1):
        r[i+1] = r[i] + 0.5*(g[i] + g[i+1])*(x[i+1] - x[i])
    return r

def compute_gamma(a=0.5, h=2.0, A=math.sqrt(2), resolution=500):
    """Return plot and mean/st.dev. value of the gamma density."""
    gah = math.gamma(a + 1./h)
    mean = A*gah/math.gamma(a)
    stdev = A/math.gamma(a)*math.sqrt(
        math.gamma(a + 2./h)*math.gamma(a) - gah**2)
    x = linspace(0, 7*stdev, resolution+1)
    y = gamma_density(x, a, h, A)
    plt.figure()  # needed to avoid adding curves in plot
    plt.plot(x, y)
    plt.title('a=%g, h=%g, A=%g' % (a, h, A))
    # Make Matplotlib write to BytesIO file object and grab
    # return the object's string
    from io import BytesIO
    figfile = BytesIO()
    plt.savefig(figfile, format='png')
    figfile.seek(0)  # rewind to beginning of file
    import base64
    figdata_density_png = base64.b64encode(figfile.getvalue())
    figfile = BytesIO()
    plt.savefig(figfile, format='svg')
    figfile.seek(0)
    figdata_density_svg = '<svg' + figfile.getvalue().split('<svg')[1]
    figdata_density_svg = unicode(figdata_density_svg,'utf-8')

    y = gamma_cumulative(x, a, h, A)
    plt.figure()
    plt.plot(x, y)
    plt.grid(True)
    figfile = BytesIO()
    plt.savefig(figfile, format='png')
    figfile.seek(0)
    figdata_cumulative_png = base64.b64encode(figfile.getvalue())
    figfile = BytesIO()
    plt.savefig(figfile, format='svg')
    figfile.seek(0)
    figdata_cumulative_svg = '<svg' + figfile.getvalue().split('<svg')[1]
    figdata_cumulative_svg = unicode(figdata_cumulative_svg,'utf-8')
    return figdata_density_png, figdata_cumulative_png, \
           figdata_density_svg, figdata_cumulative_svg, \
           '%.2f' % mean, '%.2f' % stdev
