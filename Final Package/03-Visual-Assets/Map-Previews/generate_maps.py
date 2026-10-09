"""Draw self-contained cartographic previews for the Bayt Elkaram Artifacts.

These are illustrative design assets, not Google Maps imagery or geocoded data.
Regenerate with: python generate_maps.py
"""

from pathlib import Path
from math import sin
from PIL import Image, ImageDraw, ImageFont


OUT = Path(__file__).parent
S = 3
FONT = Path(r"C:\Windows\Fonts\arial.ttf")
BOLD = Path(r"C:\Windows\Fonts\arialbd.ttf")


def xy(points):
    return [(round(x * S), round(y * S)) for x, y in points]


def font(size, bold=False):
    return ImageFont.truetype(str(BOLD if bold else FONT), round(size * S))


def line(draw, pts, color, width, joint="curve"):
    draw.line(xy(pts), fill=color, width=round(width * S), joint=joint)


def road(draw, pts, width=10, major=False):
    edge = "#e7cf8d" if major else "#dad9d4"
    fill = "#ffe6a0" if major else "#ffffff"
    line(draw, pts, edge, width + (3 if major else 2))
    line(draw, pts, fill, width)


def text(draw, pos, label, size=11, color="#6b737a", bold=False,
         anchor="mm", stroke=2):
    draw.text((pos[0] * S, pos[1] * S), label, font=font(size, bold),
              fill=color, anchor=anchor, stroke_width=stroke * S,
              stroke_fill="#f7f7f3")


def polygon(draw, pts, fill, outline=None, width=1):
    draw.polygon(xy(pts), fill=fill)
    if outline:
        line(draw, pts + [pts[0]], outline, width)


def circle(draw, center, r, fill, outline=None, width=1):
    x, y = center
    box = ((x-r)*S, (y-r)*S, (x+r)*S, (y+r)*S)
    draw.ellipse(box, fill=fill, outline=outline, width=width*S)


def canvas(w, h):
    image = Image.new("RGB", (w*S, h*S), "#f5f4f0")
    return image, ImageDraw.Draw(image)


def save(image, name, w, h):
    image.resize((w*2, h*2), Image.Resampling.LANCZOS).save(
        OUT / name, optimize=True)


def overview(w, h, small=False):
    image, d = canvas(w, h)
    # West-to-east city fabric, with the Nile separating Giza and Cairo.
    for x in range(-28, w+45, 36 if small else 43):
        bend = 5 * sin(x / 27)
        road(d, [(x-12, -20), (x+bend, h*.36),
                 (x-3, h*.69), (x+12, h+20)], 4 if small else 7)
    for y in range(-20, h+45, 29 if small else 43):
        road(d, [(-20, y+4), (w*.3, y-3),
                 (w*.66, y+4), (w+20, y-2)], 4 if small else 7)

    park = [(w*.73, h*.15), (w*.91, h*.12), (w*.97, h*.27),
            (w*.86, h*.36), (w*.72, h*.29)]
    polygon(d, park, "#dcebd7", "#c8ddc0")
    polygon(d, [(w*.05,h*.55),(w*.18,h*.51),(w*.23,h*.66),
                (w*.12,h*.71)], "#deebd9", "#caddc3")

    river = [(w*.55,-30),(w*.53,h*.16),(w*.58,h*.32),
             (w*.56,h*.5),(w*.6,h*.68),(w*.56,h+30)]
    line(d, river, "#fbfaf7", 57 if small else 74)
    line(d, river, "#a9d8ed", 51 if small else 67)
    line(d, river, "#b9e2f2", 44 if small else 59)
    if not small:
        # Zamalek sits on an island in the Nile, rather than on the east bank.
        polygon(d, [(w*.56,h*.08),(w*.59,h*.075),(w*.615,h*.13),
                    (w*.61,h*.22),(w*.58,h*.28),(w*.555,h*.2)],
                "#f5f4f0", "#e3ded2", 2)
        road(d, [(w*.583,h*.1),(w*.585,h*.2),(w*.578,h*.26)], 4)

    # Prominent routes and Nile crossings.
    road(d, [(-20,h*.27),(w*.21,h*.29),(w*.42,h*.24),
             (w*.59,h*.26),(w*.76,h*.22),(w+20,h*.24)],
         7 if small else 13, True)
    road(d, [(-20,h*.73),(w*.2,h*.66),(w*.39,h*.6),
             (w*.58,h*.57),(w*.79,h*.56),(w+20,h*.52)],
         6 if small else 11, True)
    road(d, [(w*.15,-20),(w*.23,h*.24),(w*.25,h*.49),
             (w*.34,h*.74),(w*.39,h+20)], 6 if small else 10, True)
    road(d, [(w*.89,-20),(w*.82,h*.25),(w*.84,h*.52),
             (w*.91,h+20)], 6 if small else 10, True)

    if small:
        text(d,(w*.2,h*.53),"Sheikh Zayed",9,bold=True)
        text(d,(w*.42,h*.44),"Mohandessin",9,bold=True)
        text(d,(w*.68,h*.74),"Downtown",8)
        text(d,(w*.82,h*.42),"Nasr City",9,bold=True)
        text(d,(w*.55,h*.88),"NILE",8,"#568ba5",True)
    else:
        text(d,(w*.22,h*.17),"SHEIKH ZAYED",10,bold=True)
        text(d,(w*.32,h*.48),"MOHANDESSIN",11,bold=True)
        text(d,(w*.585,h*.18),"ZAMALEK",9,bold=True)
        text(d,(w*.8,h*.44),"NASR CITY",12,bold=True)
        text(d,(w*.67,h*.74),"DOWNTOWN",11,bold=True)
        text(d,(w*.54,h*.85),"NILE",10,"#568ba5",True)
        text(d,(w*.29,h*.29),"26th of July Corridor",9)
        text(d,(w*.74,h*.61),"6th October Bridge",9)
        text(d,(w*.16,h*.83),"GIZA",10,bold=True)
        text(d,(w*.9,h*.84),"HELIOPOLIS",10,bold=True)
        circle(d,(w*.72,h*.23),2,"#8cb385")
        circle(d,(w*.12,h*.61),2,"#8cb385")
    return image


def local(w, h, variant="address"):
    image, d = canvas(w, h)
    # Irregular residential grid at neighbourhood scale.
    xs = [-24, 29, 79, 132, 180, 235, 286, 337, 395,
          455, 512, 570, 632, 700]
    ys = [-24, 39, 91, 144, 198, 252, 306, 360, 418, 480]
    sx, sy = w/390, h/420
    for i, x in enumerate(xs):
        xx = x*sx
        road(d, [(xx-8,-15),(xx+3+(i%3)*3,h*.34),
                 (xx-5,h*.69),(xx+7,h+15)], 8 if variant != "zones" else 10)
    for i, y in enumerate(ys):
        yy = y*sy
        road(d, [(-15,yy),(w*.32,yy+7-(i%2)*6),
                 (w*.67,yy-4),(w+15,yy+6)],
             8 if variant != "zones" else 10)

    polygon(d, [(w*.05,h*.04),(w*.23,h*.05),(w*.23,h*.17),
                (w*.07,h*.18)], "#dcebd6", "#c6d9bf")
    polygon(d, [(w*.74,h*.65),(w*.95,h*.62),(w*.97,h*.87),
                (w*.75,h*.88)], "#dfedd9", "#c8ddc0")
    polygon(d, [(w*.35,h*.77),(w*.45,h*.73),(w*.5,h*.85),
                (w*.38,h*.9)], "#e2ebd8", "#cbd8c0")

    road(d, [(-20,h*.55),(w*.18,h*.51),(w*.48,h*.49),
             (w*.73,h*.46),(w+20,h*.43)], 17 if variant != "zones" else 20, True)
    road(d, [(w*.67,-20),(w*.6,h*.27),(w*.55,h*.52),
             (w*.61,h*.77),(w*.69,h+20)], 14 if variant != "zones" else 16, True)
    road(d, [(w*.03,-20),(w*.12,h*.21),(w*.2,h*.51),
             (w*.3,h*.76),(w*.35,h+20)], 11 if variant != "zones" else 14, True)

    if variant == "address":
        text(d,(w*.26,h*.35),"Mohandessin",12,bold=True)
        text(d,(w*.7,h*.28),"Syria St",9)
        text(d,(w*.44,h*.6),"Lebanon St",9)
        text(d,(w*.71,h*.78),"Gameat El Dowal",9)
        text(d,(w*.16,h*.13),"Al Horreya Garden",8,"#6a9a6a")
        text(d,(w*.84,h*.9),"Dokki",10,bold=True)
    elif variant == "tracking":
        text(d,(w*.27,h*.34),"Mohandessin",12,bold=True)
        text(d,(w*.72,h*.27),"Syria St",9)
        text(d,(w*.5,h*.6),"Lebanon St",9)
        text(d,(w*.79,h*.9),"Dokki",10,bold=True)
        # Navigation path with a white casing and a live blue line.
        route = [(w*.13,h*.21),(w*.2,h*.37),(w*.21,h*.52),
                 (w*.4,h*.51),(w*.55,h*.49),(w*.6,h*.63),
                 (w*.67,h*.72),(w*.82,h*.72)]
        line(d,route,"#ffffff",13)
        line(d,route,"#4285f4",8)
        circle(d,route[0],10,"#ffffff")
        circle(d,route[0],6,"#ed2023")
        circle(d,route[-1],12,"#ffffff")
        circle(d,route[-1],8,"#2b2f36")
        circle(d,route[4],17,"#ffffff")
        circle(d,route[4],12,"#4285f4")
        cx, cy = route[4]
        polygon(d, [(cx-5,cy-7),(cx+7,cy),(cx-5,cy+7),
                    (cx-2,cy)], "#ffffff")
    else:
        text(d,(w*.23,h*.31),"MOHANDESSIN",13,bold=True)
        text(d,(w*.66,h*.18),"Syria St",10)
        text(d,(w*.43,h*.55),"Lebanon St",10)
        text(d,(w*.77,h*.8),"Dokki",12,bold=True)
        text(d,(w*.12,h*.78),"Agouza",11,bold=True)
        text(d,(w*.75,h*.36),"Gameat El Dowal St",10)
    return image


if __name__ == "__main__":
    save(overview(350,150,True), "branch-selector.png",350,150)
    save(overview(390,844), "branch-locator.png",390,844)
    save(local(390,280,"address"), "add-address.png",390,280)
    save(local(390,420,"tracking"), "live-tracking.png",390,420)
    save(local(650,420,"zones"), "delivery-zones.png",650,420)
    for file in OUT.glob("*.png"):
        print(f"{file.name}: {file.stat().st_size:,} bytes")
