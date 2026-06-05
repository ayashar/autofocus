import 'package:autofokus_mobile/main.dart';
import 'package:flutter_test/flutter_test.dart';

void main() {
  testWidgets('shows onboarding before auth and then login version', (
    WidgetTester tester,
  ) async {
    await tester.pumpWidget(const AutoFokusApp());

    expect(find.text('AutoFokus'), findsOneWidget);
    expect(find.text('Stay focused'), findsOneWidget);
    expect(find.text('Next'), findsOneWidget);

    await tester.tap(find.text('Next'));
    await tester.pumpAndSettle();
    await tester.tap(find.text('Next'));
    await tester.pumpAndSettle();
    await tester.tap(find.text('Get Started'));
    await tester.pumpAndSettle();

    expect(find.text('Log In'), findsOneWidget);
    expect(find.text('Skip for now'), findsOneWidget);
    expect(find.text('Version 1.1.1'), findsOneWidget);
  });
}
