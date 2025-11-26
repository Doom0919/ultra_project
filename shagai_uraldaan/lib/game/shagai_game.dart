import 'package:flame/game.dart';
import 'package:flame/components.dart';
import 'package:flame/camera.dart';
import 'dart:ui';

class ShagaiGame extends FlameGame {
  @override
  Future<void> onLoad() async {
    camera.viewport = FixedAspectRatioViewport(
      aspectRatio: 16 / 9,
    );
  }

  @override
  void render(Canvas canvas) {
    super.render(canvas);

    // тест дүрс – улаан дөрвөлжин
    canvas.drawRect(
      Rect.fromLTWH(100, 100, 100, 100),
      Paint()..color = const Color(0xFFFF0000),
    );
  }

  @override
  void update(double dt) {}
}
