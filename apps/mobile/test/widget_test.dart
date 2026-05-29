import 'package:autofokus_mobile/main.dart';
import 'package:flutter_test/flutter_test.dart';

void main() {
  testWidgets('shows auth screen with app version', (
    WidgetTester tester,
  ) async {
    await tester.pumpWidget(const AutoFokusApp());

    expect(find.text('AutoFokus'), findsOneWidget);
    expect(find.text('Log In'), findsOneWidget);
    expect(find.text('Skip for now'), findsOneWidget);
    expect(find.text('Version 1.1.0'), findsOneWidget);
  });
}
