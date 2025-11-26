import 'package:flame/game.dart';
import 'package:flutter/material.dart';
import 'game/shagai_game.dart';

void main() {
  runApp(
    GameWidget(
      game: ShagaiGame(),
    ),
  );
}
