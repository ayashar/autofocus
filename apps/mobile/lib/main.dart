import 'dart:async';
import 'dart:math';

import 'package:flutter/material.dart';

void main() {
  runApp(const AutoFokusApp());
}

const appVersion = '1.1.1';

class AppColors {
  static const primary100 = Color(0xFFD7F5D9);
  static const primary300 = Color(0xFF6FC96F);
  static const primary400 = Color(0xFF4FA253);
  static const primary500 = Color(0xFF357A3A);
  static const primary600 = Color(0xFF275D2D);
  static const ink = Color(0xFF061A0B);
  static const muted = Color(0xFF9AAC92);
  static const line = Color(0xFFB9C7B4);
  static const danger = Color(0xFFFFA7A7);
  static const dangerText = Color(0xFF8E0000);
}

enum AppPage {
  login,
  register,
  profileSetup,
  configure,
  dashboard,
  timer,
  profile,
  focus,
}

enum FocusPhase { focus, rest }

class BlockedApp {
  BlockedApp({
    required this.name,
    required this.label,
    required this.color,
    this.selected = false,
  });

  final String name;
  final String label;
  final Color color;
  bool selected;
}

class FocusTimer {
  FocusTimer({required this.focusSeconds, required this.breakSeconds});

  int focusSeconds;
  int breakSeconds;
}

class PastSession {
  PastSession({
    required this.date,
    required this.focusedSeconds,
    required this.giveUps,
  });

  final DateTime date;
  final int focusedSeconds;
  final int giveUps;
}

class AutoFokusApp extends StatefulWidget {
  const AutoFokusApp({super.key});

  @override
  State<AutoFokusApp> createState() => _AutoFokusAppState();
}

class _AutoFokusAppState extends State<AutoFokusApp> {
  AppPage page = AppPage.login;
  bool loggedIn = false;
  bool guest = false;
  String username = 'User';
  int avatarId = 1;
  int streak = 0;
  int selectedNav = 1;
  int sessionSeconds = 0;
  int firstFocusSeconds = 25 * 60;
  List<FocusTimer> timers = <FocusTimer>[];
  List<PastSession> sessions = <PastSession>[];
  late final List<BlockedApp> blockedApps = _initialBlockedApps();

  void goTo(AppPage nextPage) {
    setState(() {
      page = nextPage;
      if (nextPage == AppPage.profile) selectedNav = 0;
      if (nextPage == AppPage.dashboard) selectedNav = 1;
      if (nextPage == AppPage.timer) selectedNav = 2;
    });
  }

  void login({String? email}) {
    setState(() {
      loggedIn = true;
      guest = false;
      username = (email?.split('@').first.trim().isNotEmpty ?? false)
          ? email!.split('@').first
          : 'Satya';
      page = AppPage.configure;
    });
  }

  void skipAuth() {
    setState(() {
      loggedIn = false;
      guest = true;
      page = AppPage.configure;
    });
  }

  void saveProfileSetup(String name, int selectedAvatar) {
    setState(() {
      username = name.trim().isEmpty ? 'Satya' : name.trim();
      avatarId = selectedAvatar;
      loggedIn = true;
      guest = false;
      page = AppPage.configure;
    });
  }

  void saveConfiguration() {
    setState(() => page = AppPage.timer);
  }

  void setSessionDuration(int seconds) {
    setState(() {
      sessionSeconds = seconds;
      firstFocusSeconds = 25 * 60;
      timers = generateAdaptiveTimers(seconds, firstFocusSeconds);
    });
  }

  void setFirstTimer(int seconds) {
    setState(() {
      firstFocusSeconds = clampFocus(seconds);
      timers = generateAdaptiveTimers(sessionSeconds, firstFocusSeconds);
    });
  }

  void removeTimer(int index) {
    setState(() {
      if (index > 0 && index < timers.length) {
        timers.removeAt(index);
      }
    });
  }

  void resetTimers() {
    setState(() {
      firstFocusSeconds = 25 * 60;
      timers = generateAdaptiveTimers(sessionSeconds, firstFocusSeconds);
    });
  }

  void saveCompletedSession(int focusedSeconds, int giveUps) {
    if (!loggedIn || guest) {
      showDialog<void>(
        context: context,
        builder: (context) => AppDialog(
          title: 'Oops! You need to Log In to save your progress',
          children: [
            PrimaryButton(
              label: 'Log in',
              onPressed: () {
                Navigator.pop(context);
                goTo(AppPage.login);
              },
            ),
            const SizedBox(height: 10),
            PrimaryButton(
              label: 'Lose my progress',
              danger: true,
              onPressed: () {
                Navigator.pop(context);
                goTo(AppPage.dashboard);
              },
            ),
          ],
        ),
      );
      return;
    }

    setState(() {
      streak += 1;
      sessions.insert(
        0,
        PastSession(
          date: DateTime.now(),
          focusedSeconds: focusedSeconds,
          giveUps: giveUps,
        ),
      );
      page = AppPage.dashboard;
    });
  }

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'AutoFokus',
      theme: ThemeData(
        colorScheme: ColorScheme.fromSeed(seedColor: AppColors.primary500),
        fontFamily: 'Albert Sans',
        scaffoldBackgroundColor: Colors.white,
        useMaterial3: true,
      ),
      home: Builder(
        builder: (context) {
          return switch (page) {
            AppPage.login => LoginScreen(
              onLogin: login,
              onSignUp: () => goTo(AppPage.register),
              onSkip: skipAuth,
            ),
            AppPage.register => RegisterScreen(
              onBack: () => goTo(AppPage.login),
              onRegister: () => goTo(AppPage.profileSetup),
              onSignIn: () => goTo(AppPage.login),
            ),
            AppPage.profileSetup => ProfileSetupScreen(
              onBack: () => goTo(AppPage.register),
              onSave: saveProfileSetup,
            ),
            AppPage.configure => ConfigureScreen(
              apps: blockedApps,
              onBack: () => goTo(AppPage.login),
              onSave: saveConfiguration,
            ),
            AppPage.dashboard => DashboardScreen(
              loggedIn: loggedIn && !guest,
              sessions: sessions,
              onLogin: () => goTo(AppPage.login),
              onNav: goTo,
            ),
            AppPage.timer => TimerSetupScreen(
              timers: timers,
              sessionSeconds: sessionSeconds,
              selectedApps: blockedApps.where((app) => app.selected).toList(),
              onSetDuration: setSessionDuration,
              onSetFirstTimer: setFirstTimer,
              onRemoveTimer: removeTimer,
              onResetTimers: resetTimers,
              onConfigureApps: () => goTo(AppPage.configure),
              onStart: () => goTo(AppPage.focus),
              onNav: goTo,
            ),
            AppPage.profile => ProfileScreen(
              username: username,
              avatarId: avatarId,
              streak: streak,
              onSave: (name, selectedAvatar) {
                setState(() {
                  username = name.trim().isEmpty ? username : name.trim();
                  avatarId = selectedAvatar;
                });
              },
              onLogout: () {
                setState(() {
                  loggedIn = false;
                  guest = true;
                  page = AppPage.login;
                });
              },
              onNav: goTo,
            ),
            AppPage.focus => FocusSessionScreen(
              timers: timers.isEmpty
                  ? <FocusTimer>[
                      FocusTimer(focusSeconds: 25 * 60, breakSeconds: 5 * 60),
                    ]
                  : timers,
              onFinish: saveCompletedSession,
              onExit: () => goTo(AppPage.dashboard),
            ),
          };
        },
      ),
    );
  }
}

List<BlockedApp> _initialBlockedApps() {
  return <BlockedApp>[
    BlockedApp(
      name: 'Instagram',
      label: 'IG',
      color: const Color(0xFFE94E77),
      selected: true,
    ),
    BlockedApp(
      name: 'YouTube',
      label: 'YT',
      color: const Color(0xFFFF0000),
      selected: true,
    ),
    BlockedApp(
      name: 'TikTok',
      label: 'TT',
      color: const Color(0xFF111111),
      selected: true,
    ),
    BlockedApp(
      name: 'Twitter (X)',
      label: 'X',
      color: const Color(0xFF0F1419),
      selected: true,
    ),
    BlockedApp(name: 'WhatsApp', label: 'WA', color: const Color(0xFF25D366)),
    BlockedApp(name: 'Chrome', label: 'C', color: const Color(0xFFEA4335)),
    BlockedApp(name: 'Safari', label: 'SF', color: const Color(0xFF21A5F5)),
    BlockedApp(name: 'Telegram', label: 'TG', color: const Color(0xFF26A5E4)),
    BlockedApp(name: 'Discord', label: 'DC', color: const Color(0xFF5865F2)),
    BlockedApp(name: 'Reddit', label: 'RD', color: const Color(0xFFFF4500)),
    BlockedApp(name: 'Facebook', label: 'FB', color: const Color(0xFF1877F2)),
    BlockedApp(name: 'Messenger', label: 'MS', color: const Color(0xFF006AFF)),
    BlockedApp(name: 'Netflix', label: 'NF', color: const Color(0xFFE50914)),
    BlockedApp(name: 'Spotify', label: 'SP', color: const Color(0xFF1DB954)),
    BlockedApp(name: 'Twitch', label: 'TW', color: const Color(0xFF9146FF)),
    BlockedApp(name: 'Pinterest', label: 'PT', color: const Color(0xFFE60023)),
    BlockedApp(name: 'Snapchat', label: 'SC', color: const Color(0xFFFFD400)),
    BlockedApp(name: 'Shopee', label: 'SH', color: const Color(0xFFEE4D2D)),
    BlockedApp(name: 'Tokopedia', label: 'TP', color: const Color(0xFF03AC0E)),
    BlockedApp(
      name: 'Mobile Legends',
      label: 'ML',
      color: const Color(0xFF2257D8),
    ),
    BlockedApp(
      name: 'Genshin Impact',
      label: 'GI',
      color: const Color(0xFF6D8ACF),
    ),
    BlockedApp(name: 'Steam', label: 'ST', color: const Color(0xFF171A21)),
    BlockedApp(name: 'Roblox', label: 'RB', color: const Color(0xFF232527)),
    BlockedApp(name: 'CapCut', label: 'CC', color: const Color(0xFF111111)),
    BlockedApp(name: 'Threads', label: 'TH', color: const Color(0xFF111111)),
    BlockedApp(name: 'LinkedIn', label: 'IN', color: const Color(0xFF0A66C2)),
    BlockedApp(name: 'Gmail', label: 'GM', color: const Color(0xFFEA4335)),
    BlockedApp(name: 'Canva', label: 'CV', color: const Color(0xFF00C4CC)),
  ];
}

int clampFocus(int seconds) {
  const minFocus = 5 * 60;
  const maxFocus = 50 * 60;
  final rounded = (seconds / 60).round() * 60;
  return rounded.clamp(minFocus, maxFocus);
}

int breakSecondsFor(int focusSeconds) {
  const maxBreak = 10 * 60;
  final rounded = (focusSeconds / 5 / 60).round() * 60;
  return rounded.clamp(60, maxBreak);
}

int nextFocusSeconds(int baseFocus, int previousFocus) {
  const defaultFocus = 25 * 60;
  const maxFocus = 50 * 60;
  if (baseFocus >= maxFocus) return min(maxFocus, previousFocus + 25 * 60);
  if (baseFocus < defaultFocus) return min(maxFocus, previousFocus + 5 * 60);
  return min(maxFocus, (previousFocus * 1.25 / 60).round() * 60);
}

List<FocusTimer> generateAdaptiveTimers(
  int sessionSeconds,
  int firstFocusSeconds,
) {
  final timers = <FocusTimer>[];
  var remaining = max(0, sessionSeconds);
  var targetFocus = clampFocus(firstFocusSeconds);
  final baseFocus = targetFocus;

  while (remaining > 0 && timers.length < 24) {
    final focus = min(targetFocus, remaining);
    remaining -= focus;
    final rest = remaining > 0 ? min(breakSecondsFor(focus), remaining) : 0;
    remaining -= rest;
    timers.add(FocusTimer(focusSeconds: focus, breakSeconds: rest));
    targetFocus = nextFocusSeconds(baseFocus, targetFocus);
  }

  return timers;
}

int totalFocusedSeconds(List<FocusTimer> timers) {
  return timers.fold(0, (total, timer) => total + timer.focusSeconds);
}

String hms(int seconds) {
  final safe = max(0, seconds);
  final hours = safe ~/ 3600;
  final minutes = (safe % 3600) ~/ 60;
  final secs = safe % 60;
  return '${hours.toString().padLeft(2, '0')}:${minutes.toString().padLeft(2, '0')}:${secs.toString().padLeft(2, '0')}';
}

String clock(int seconds) {
  final safe = max(0, seconds);
  final minutes = safe ~/ 60;
  final secs = safe % 60;
  return '${minutes.toString().padLeft(2, '0')}:${secs.toString().padLeft(2, '0')}';
}

class AuthShell extends StatelessWidget {
  const AuthShell({
    required this.children,
    this.showBack = false,
    this.onBack,
    super.key,
  });

  final List<Widget> children;
  final bool showBack;
  final VoidCallback? onBack;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: SafeArea(
        child: LayoutBuilder(
          builder: (context, constraints) {
            return SingleChildScrollView(
              child: ConstrainedBox(
                constraints: BoxConstraints(minHeight: constraints.maxHeight),
                child: IntrinsicHeight(
                  child: Padding(
                    padding: const EdgeInsets.symmetric(
                      horizontal: 28,
                      vertical: 28,
                    ),
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.stretch,
                      children: [
                        if (showBack)
                          Align(
                            alignment: Alignment.centerLeft,
                            child: SizedBox(
                              width: 112,
                              child: PrimaryButton(
                                label: 'Back',
                                icon: Icons.arrow_back,
                                onPressed: onBack,
                              ),
                            ),
                          ),
                        const Spacer(flex: 2),
                        const BrandHeader(),
                        const SizedBox(height: 58),
                        ...children,
                        const Spacer(flex: 3),
                        const Text(
                          'Version 1.1.0',
                          textAlign: TextAlign.center,
                          style: TextStyle(
                            color: AppColors.muted,
                            fontSize: 12,
                          ),
                        ),
                      ],
                    ),
                  ),
                ),
              ),
            );
          },
        ),
      ),
    );
  }
}

class BrandHeader extends StatelessWidget {
  const BrandHeader({super.key});

  @override
  Widget build(BuildContext context) {
    return const Column(
      children: [
        Text(
          'AutoFokus',
          textAlign: TextAlign.center,
          style: TextStyle(
            color: AppColors.ink,
            fontFamily: 'Inter',
            fontSize: 54,
            fontWeight: FontWeight.w900,
            height: 0.95,
          ),
        ),
        SizedBox(height: 8),
        Text(
          'Lock your focus. AutoFokus ON!',
          textAlign: TextAlign.center,
          style: TextStyle(color: AppColors.muted, fontSize: 17),
        ),
      ],
    );
  }
}

class LoginScreen extends StatefulWidget {
  const LoginScreen({
    required this.onLogin,
    required this.onSignUp,
    required this.onSkip,
    super.key,
  });

  final void Function({String? email}) onLogin;
  final VoidCallback onSignUp;
  final VoidCallback onSkip;

  @override
  State<LoginScreen> createState() => _LoginScreenState();
}

class _LoginScreenState extends State<LoginScreen> {
  final emailController = TextEditingController();
  final passwordController = TextEditingController();

  @override
  void dispose() {
    emailController.dispose();
    passwordController.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return AuthShell(
      children: [
        AppTextField(
          label: 'Email',
          hint: 'youremail@gmail.com',
          controller: emailController,
        ),
        const SizedBox(height: 20),
        AppTextField(
          label: 'Password',
          hint: 'Password',
          controller: passwordController,
          obscure: true,
        ),
        const SizedBox(height: 34),
        PrimaryButton(
          label: 'Log In',
          onPressed: () => widget.onLogin(email: emailController.text),
        ),
        const SizedBox(height: 8),
        Row(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            const Text(
              'Don\'t have an account? ',
              style: TextStyle(fontSize: 13),
            ),
            TextButton(
              onPressed: widget.onSignUp,
              child: const Text(
                'Sign Up',
                style: TextStyle(color: AppColors.primary500, fontSize: 13),
              ),
            ),
          ],
        ),
        const SizedBox(height: 54),
        TextButton(
          onPressed: widget.onSkip,
          child: const Text(
            'Skip for now',
            style: TextStyle(color: Color(0xFF858585), fontSize: 16),
          ),
        ),
      ],
    );
  }
}

class RegisterScreen extends StatefulWidget {
  const RegisterScreen({
    required this.onBack,
    required this.onRegister,
    required this.onSignIn,
    super.key,
  });

  final VoidCallback onBack;
  final VoidCallback onRegister;
  final VoidCallback onSignIn;

  @override
  State<RegisterScreen> createState() => _RegisterScreenState();
}

class _RegisterScreenState extends State<RegisterScreen> {
  final emailController = TextEditingController();
  final passwordController = TextEditingController();
  final confirmController = TextEditingController();

  @override
  void dispose() {
    emailController.dispose();
    passwordController.dispose();
    confirmController.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return AuthShell(
      showBack: true,
      onBack: widget.onBack,
      children: [
        AppTextField(
          label: 'Email',
          hint: 'youremail@gmail.com',
          controller: emailController,
        ),
        const SizedBox(height: 20),
        AppTextField(
          label: 'Password',
          hint: 'Password',
          controller: passwordController,
          obscure: true,
        ),
        const SizedBox(height: 20),
        AppTextField(
          label: 'Confirm Password',
          hint: 'Confirm Password',
          controller: confirmController,
          obscure: true,
        ),
        const SizedBox(height: 34),
        PrimaryButton(label: 'Register', onPressed: widget.onRegister),
        Row(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            const Text(
              'Already have an account? ',
              style: TextStyle(fontSize: 13),
            ),
            TextButton(
              onPressed: widget.onSignIn,
              child: const Text(
                'Sign In',
                style: TextStyle(color: AppColors.primary500, fontSize: 13),
              ),
            ),
          ],
        ),
      ],
    );
  }
}

class ProfileSetupScreen extends StatefulWidget {
  const ProfileSetupScreen({
    required this.onBack,
    required this.onSave,
    super.key,
  });

  final VoidCallback onBack;
  final void Function(String name, int avatarId) onSave;

  @override
  State<ProfileSetupScreen> createState() => _ProfileSetupScreenState();
}

class _ProfileSetupScreenState extends State<ProfileSetupScreen> {
  final usernameController = TextEditingController();
  int selectedAvatar = 1;

  @override
  void dispose() {
    usernameController.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return AuthShell(
      showBack: true,
      onBack: widget.onBack,
      children: [
        AppTextField(
          label: 'What should we call you?',
          hint: 'username',
          controller: usernameController,
          centeredLabel: true,
        ),
        const SizedBox(height: 28),
        const Text(
          'Choose your profile picture',
          textAlign: TextAlign.center,
          style: TextStyle(fontSize: 17),
        ),
        const SizedBox(height: 16),
        Row(
          children: List.generate(4, (index) {
            final id = index + 1;
            return Expanded(
              child: Padding(
                padding: EdgeInsets.only(right: index == 3 ? 0 : 10),
                child: AvatarTile(
                  selected: selectedAvatar == id,
                  onTap: () => setState(() => selectedAvatar = id),
                ),
              ),
            );
          }),
        ),
        const SizedBox(height: 28),
        PrimaryButton(
          label: 'Log In',
          onPressed: () =>
              widget.onSave(usernameController.text, selectedAvatar),
        ),
      ],
    );
  }
}

class ConfigureScreen extends StatefulWidget {
  const ConfigureScreen({
    required this.apps,
    required this.onBack,
    required this.onSave,
    super.key,
  });

  final List<BlockedApp> apps;
  final VoidCallback onBack;
  final VoidCallback onSave;

  @override
  State<ConfigureScreen> createState() => _ConfigureScreenState();
}

class _ConfigureScreenState extends State<ConfigureScreen> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: const AppTopBar(title: 'Configure'),
      body: SafeArea(
        top: false,
        child: Padding(
          padding: const EdgeInsets.fromLTRB(26, 22, 26, 26),
          child: Column(
            children: [
              Align(
                alignment: Alignment.centerLeft,
                child: SizedBox(
                  width: 112,
                  child: PrimaryButton(
                    label: 'Back',
                    icon: Icons.arrow_back,
                    onPressed: widget.onBack,
                  ),
                ),
              ),
              const SizedBox(height: 28),
              const Text(
                'Choose the app you want to block during your lock-in session',
                textAlign: TextAlign.center,
                style: TextStyle(
                  color: AppColors.muted,
                  fontSize: 18,
                  height: 1.25,
                ),
              ),
              const SizedBox(height: 28),
              Expanded(
                child: Container(
                  decoration: BoxDecoration(
                    color: AppColors.primary100,
                    borderRadius: BorderRadius.circular(6),
                  ),
                  child: ListView.separated(
                    padding: const EdgeInsets.all(8),
                    itemCount: widget.apps.length,
                    separatorBuilder: (_, _) => const SizedBox(height: 6),
                    itemBuilder: (context, index) {
                      final app = widget.apps[index];
                      return BlockedAppTile(
                        app: app,
                        onTap: () =>
                            setState(() => app.selected = !app.selected),
                      );
                    },
                  ),
                ),
              ),
              const SizedBox(height: 22),
              PrimaryButton(label: 'Configure', onPressed: widget.onSave),
            ],
          ),
        ),
      ),
    );
  }
}

class DashboardScreen extends StatelessWidget {
  const DashboardScreen({
    required this.loggedIn,
    required this.sessions,
    required this.onLogin,
    required this.onNav,
    super.key,
  });

  final bool loggedIn;
  final List<PastSession> sessions;
  final VoidCallback onLogin;
  final void Function(AppPage page) onNav;

  @override
  Widget build(BuildContext context) {
    return AppScaffold(
      title: 'Dashboard',
      selectedIndex: 1,
      onNav: onNav,
      child: Padding(
        padding: const EdgeInsets.fromLTRB(18, 16, 18, 18),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            const Text(
              'Past Sessions',
              style: TextStyle(fontSize: 20, fontWeight: FontWeight.w800),
            ),
            Expanded(
              child: loggedIn
                  ? sessions.isEmpty
                        ? const Center(
                            child: Text(
                              'No sessions recorded yet.',
                              style: TextStyle(color: AppColors.muted),
                            ),
                          )
                        : ListView.separated(
                            padding: const EdgeInsets.only(top: 16),
                            itemCount: sessions.length,
                            separatorBuilder: (_, _) =>
                                const SizedBox(height: 12),
                            itemBuilder: (context, index) =>
                                SessionTile(session: sessions[index]),
                          )
                  : Center(
                      child: Column(
                        mainAxisSize: MainAxisSize.min,
                        children: [
                          const Icon(
                            Icons.person_outline,
                            size: 126,
                            color: AppColors.ink,
                          ),
                          const SizedBox(height: 26),
                          const Text(
                            'Log in first to record your sessions!',
                            textAlign: TextAlign.center,
                            style: TextStyle(
                              fontSize: 20,
                              fontWeight: FontWeight.w800,
                            ),
                          ),
                          const SizedBox(height: 20),
                          SizedBox(
                            width: 323,
                            child: PrimaryButton(
                              label: 'Log In',
                              onPressed: onLogin,
                            ),
                          ),
                        ],
                      ),
                    ),
            ),
          ],
        ),
      ),
    );
  }
}

class TimerSetupScreen extends StatefulWidget {
  const TimerSetupScreen({
    required this.timers,
    required this.sessionSeconds,
    required this.selectedApps,
    required this.onSetDuration,
    required this.onSetFirstTimer,
    required this.onRemoveTimer,
    required this.onResetTimers,
    required this.onConfigureApps,
    required this.onStart,
    required this.onNav,
    super.key,
  });

  final List<FocusTimer> timers;
  final int sessionSeconds;
  final List<BlockedApp> selectedApps;
  final void Function(int seconds) onSetDuration;
  final void Function(int seconds) onSetFirstTimer;
  final void Function(int index) onRemoveTimer;
  final VoidCallback onResetTimers;
  final VoidCallback onConfigureApps;
  final VoidCallback onStart;
  final void Function(AppPage page) onNav;

  @override
  State<TimerSetupScreen> createState() => _TimerSetupScreenState();
}

class _TimerSetupScreenState extends State<TimerSetupScreen> {
  TimeParts durationParts = TimeParts.zero();

  Future<void> openDurationDialog() async {
    final result = await showDialog<int>(
      context: context,
      builder: (context) =>
          TimeDialog(title: 'Set Timer', initialSeconds: widget.sessionSeconds),
    );
    if (result != null && result > 0) {
      setState(() => durationParts = TimeParts.fromSeconds(result));
      widget.onSetDuration(result);
    }
  }

  Future<void> openFirstTimerDialog() async {
    if (widget.timers.isEmpty) return;
    final result = await showDialog<int>(
      context: context,
      builder: (context) => TimeDialog(
        title: 'Set Timer',
        initialSeconds: widget.timers.first.focusSeconds,
      ),
    );
    if (result != null && result > 0) widget.onSetFirstTimer(result);
  }

  Future<void> confirmStart() async {
    if (widget.timers.isEmpty) {
      openDurationDialog();
      return;
    }
    await showDialog<void>(
      context: context,
      builder: (context) => AppDialog(
        title: 'Blocked apps',
        children: [
          const Text(
            'You won\'t be able to open these apps in your focus session',
            textAlign: TextAlign.center,
            style: TextStyle(color: Colors.white, fontSize: 15),
          ),
          const SizedBox(height: 20),
          Container(
            width: double.infinity,
            padding: const EdgeInsets.all(20),
            decoration: BoxDecoration(
              color: AppColors.primary300,
              borderRadius: BorderRadius.circular(7),
            ),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children:
                  (widget.selectedApps.isEmpty
                          ? ['Instagram', 'YouTube', 'TikTok']
                          : widget.selectedApps.map((app) => app.name).take(8))
                      .map(
                        (name) => Padding(
                          padding: const EdgeInsets.symmetric(vertical: 4),
                          child: Text(
                            name,
                            style: const TextStyle(
                              color: AppColors.ink,
                              fontSize: 18,
                            ),
                          ),
                        ),
                      )
                      .toList(),
            ),
          ),
          const SizedBox(height: 24),
          PrimaryButton(
            label: 'Configure Blocked App',
            onPressed: () {
              Navigator.pop(context);
              widget.onConfigureApps();
            },
          ),
          const SizedBox(height: 10),
          PrimaryButton(
            label: 'Start Session',
            onPressed: () {
              Navigator.pop(context);
              widget.onStart();
            },
          ),
          const SizedBox(height: 10),
          PrimaryButton(
            label: 'Go back',
            onPressed: () => Navigator.pop(context),
          ),
        ],
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    return AppScaffold(
      title: 'Create Focus Session',
      selectedIndex: 2,
      onNav: widget.onNav,
      child: Padding(
        padding: const EdgeInsets.fromLTRB(20, 22, 20, 18),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Container(
              width: double.infinity,
              padding: const EdgeInsets.all(16),
              decoration: BoxDecoration(
                color: AppColors.primary400,
                borderRadius: BorderRadius.circular(18),
              ),
              child: Column(
                children: [
                  const Text(
                    'Session duration',
                    style: TextStyle(
                      color: Colors.white,
                      fontSize: 25,
                      fontWeight: FontWeight.w800,
                    ),
                  ),
                  const SizedBox(height: 26),
                  TimeDisplay(parts: durationParts),
                  const SizedBox(height: 28),
                  PrimaryButton(
                    label: 'Set Duration',
                    onPressed: openDurationDialog,
                  ),
                  const SizedBox(height: 10),
                  PrimaryButton(
                    label: 'Start Session',
                    danger: true,
                    onPressed: confirmStart,
                  ),
                ],
              ),
            ),
            const SizedBox(height: 12),
            const Center(
              child: Text(
                'This will be your whole session duration,\nincluding breaks and focus time',
                textAlign: TextAlign.center,
                style: TextStyle(fontSize: 14, height: 1.15),
              ),
            ),
            const SizedBox(height: 28),
            Row(
              children: [
                const Text(
                  'Timer(s)',
                  style: TextStyle(fontSize: 22, fontWeight: FontWeight.w800),
                ),
                const Spacer(),
                if (widget.timers.isNotEmpty)
                  IconButton(
                    onPressed: widget.onResetTimers,
                    icon: const Icon(Icons.refresh, size: 30),
                  ),
              ],
            ),
            Expanded(
              child: widget.timers.isEmpty
                  ? const Center(
                      child: Column(
                        mainAxisSize: MainAxisSize.min,
                        children: [
                          Icon(
                            Icons.access_time,
                            size: 88,
                            color: AppColors.ink,
                          ),
                          SizedBox(height: 24),
                          Text('Please set the session duration first'),
                        ],
                      ),
                    )
                  : ListView.separated(
                      padding: const EdgeInsets.only(top: 8, bottom: 12),
                      itemCount: widget.timers.length + 1,
                      separatorBuilder: (_, _) => const SizedBox(height: 10),
                      itemBuilder: (context, index) {
                        if (index == widget.timers.length) {
                          return const Text(
                            'You can change the first timer of your session',
                            textAlign: TextAlign.center,
                            style: TextStyle(fontSize: 14),
                          );
                        }
                        return TimerTile(
                          index: index,
                          timer: widget.timers[index],
                          onTap: index == 0 ? openFirstTimerDialog : null,
                          onDelete: index == 0
                              ? null
                              : () => widget.onRemoveTimer(index),
                        );
                      },
                    ),
            ),
          ],
        ),
      ),
    );
  }
}

class ProfileScreen extends StatefulWidget {
  const ProfileScreen({
    required this.username,
    required this.avatarId,
    required this.streak,
    required this.onSave,
    required this.onLogout,
    required this.onNav,
    super.key,
  });

  final String username;
  final int avatarId;
  final int streak;
  final void Function(String name, int avatarId) onSave;
  final VoidCallback onLogout;
  final void Function(AppPage page) onNav;

  @override
  State<ProfileScreen> createState() => _ProfileScreenState();
}

class _ProfileScreenState extends State<ProfileScreen> {
  late final TextEditingController usernameController = TextEditingController(
    text: widget.username,
  );
  late int selectedAvatar = widget.avatarId;

  @override
  void dispose() {
    usernameController.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return AppScaffold(
      title: 'Profile',
      selectedIndex: 0,
      onNav: widget.onNav,
      child: Padding(
        padding: const EdgeInsets.fromLTRB(16, 24, 16, 18),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Container(
              width: double.infinity,
              padding: const EdgeInsets.all(22),
              decoration: BoxDecoration(
                color: AppColors.primary100,
                borderRadius: BorderRadius.circular(20),
              ),
              child: Row(
                children: [
                  const CircleAvatar(
                    radius: 38,
                    backgroundColor: Color(0xFFD9D9D9),
                  ),
                  const SizedBox(width: 18),
                  Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text.rich(
                        TextSpan(
                          text: 'Hello, ',
                          children: [
                            TextSpan(
                              text: '${widget.username}!',
                              style: const TextStyle(
                                fontWeight: FontWeight.w800,
                              ),
                            ),
                          ],
                        ),
                        style: const TextStyle(fontSize: 20),
                      ),
                      const SizedBox(height: 10),
                      Text(
                        'Current streak: ${widget.streak}',
                        style: const TextStyle(
                          fontSize: 16,
                          fontWeight: FontWeight.w800,
                        ),
                      ),
                    ],
                  ),
                ],
              ),
            ),
            const SizedBox(height: 40),
            const Text(
              'Change profile',
              style: TextStyle(fontSize: 22, fontWeight: FontWeight.w800),
            ),
            const SizedBox(height: 28),
            Row(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Expanded(
                  flex: 6,
                  child: Column(
                    children: [
                      AppTextField(
                        label: 'Username',
                        hint: 'username',
                        controller: usernameController,
                      ),
                      const SizedBox(height: 44),
                      PrimaryButton(
                        label: 'Save',
                        onPressed: () => widget.onSave(
                          usernameController.text,
                          selectedAvatar,
                        ),
                      ),
                      const SizedBox(height: 10),
                      PrimaryButton(
                        label: 'Logout',
                        danger: true,
                        onPressed: widget.onLogout,
                      ),
                    ],
                  ),
                ),
                const SizedBox(width: 20),
                Expanded(
                  flex: 4,
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      const Text(
                        'Profile Picture',
                        style: TextStyle(fontSize: 16),
                      ),
                      const SizedBox(height: 10),
                      GridView.count(
                        crossAxisCount: 2,
                        shrinkWrap: true,
                        mainAxisSpacing: 10,
                        crossAxisSpacing: 10,
                        physics: const NeverScrollableScrollPhysics(),
                        children: List.generate(4, (index) {
                          final id = index + 1;
                          return AvatarTile(
                            selected: selectedAvatar == id,
                            onTap: () => setState(() => selectedAvatar = id),
                          );
                        }),
                      ),
                    ],
                  ),
                ),
              ],
            ),
          ],
        ),
      ),
    );
  }
}

class FocusSessionScreen extends StatefulWidget {
  const FocusSessionScreen({
    required this.timers,
    required this.onFinish,
    required this.onExit,
    super.key,
  });

  final List<FocusTimer> timers;
  final void Function(int focusedSeconds, int giveUps) onFinish;
  final VoidCallback onExit;

  @override
  State<FocusSessionScreen> createState() => _FocusSessionScreenState();
}

class _FocusSessionScreenState extends State<FocusSessionScreen> {
  Timer? ticker;
  int timerIndex = 0;
  FocusPhase phase = FocusPhase.focus;
  late int timeLeft = widget.timers.first.focusSeconds;
  int giveUps = 0;
  int challengeA = 12;
  int challengeB = 5;
  final answerController = TextEditingController();

  @override
  void initState() {
    super.initState();
    startTicker();
  }

  @override
  void dispose() {
    ticker?.cancel();
    answerController.dispose();
    super.dispose();
  }

  void startTicker() {
    ticker?.cancel();
    ticker = Timer.periodic(const Duration(seconds: 1), (_) {
      if (!mounted) return;
      setState(() {
        if (timeLeft > 0) {
          timeLeft -= 1;
        } else {
          advanceSegment();
        }
      });
    });
  }

  void advanceSegment() {
    final current = widget.timers[timerIndex];
    if (phase == FocusPhase.focus && current.breakSeconds > 0) {
      phase = FocusPhase.rest;
      timeLeft = current.breakSeconds;
      return;
    }

    if (timerIndex + 1 < widget.timers.length) {
      timerIndex += 1;
      phase = FocusPhase.focus;
      timeLeft = widget.timers[timerIndex].focusSeconds;
      return;
    }

    ticker?.cancel();
    showFinishDialog();
  }

  void showGiveUpDialog() {
    setState(() {
      giveUps += 1;
      challengeA = Random().nextInt(11) + 2;
      challengeB = Random().nextInt(8) + 2;
      answerController.clear();
    });

    showDialog<void>(
      context: context,
      builder: (context) => AppDialog(
        title: 'Wait a minute!',
        children: [
          const Text(
            'Answer this question first to stop your session',
            textAlign: TextAlign.center,
            style: TextStyle(color: Colors.white),
          ),
          const SizedBox(height: 56),
          Text(
            '$challengeA × $challengeB = ?',
            textAlign: TextAlign.center,
            style: const TextStyle(
              color: Colors.white,
              fontSize: 34,
              fontWeight: FontWeight.w800,
            ),
          ),
          const SizedBox(height: 32),
          AppTextField(
            label: '',
            hint: 'Your Answer',
            controller: answerController,
            fill: AppColors.primary500.withValues(alpha: 0.6),
          ),
          const SizedBox(height: 56),
          PrimaryButton(
            label: 'Go back',
            onPressed: () => Navigator.pop(context),
          ),
          const SizedBox(height: 10),
          PrimaryButton(
            label: 'Give Up!',
            danger: true,
            onPressed: () {
              if (int.tryParse(answerController.text) ==
                  challengeA * challengeB) {
                ticker?.cancel();
                Navigator.pop(context);
                widget.onExit();
              }
            },
          ),
        ],
      ),
    );
  }

  void showFinishDialog() {
    showDialog<void>(
      context: context,
      barrierDismissible: false,
      builder: (context) => AppDialog(
        title: 'Session Finished!',
        children: [
          const SizedBox(height: 22),
          Container(
            padding: const EdgeInsets.all(20),
            decoration: BoxDecoration(
              color: AppColors.primary300,
              borderRadius: BorderRadius.circular(7),
            ),
            child: Column(
              children: [
                Row(
                  mainAxisAlignment: MainAxisAlignment.spaceBetween,
                  children: [
                    const Text('Time focused:', style: TextStyle(fontSize: 16)),
                    Text(
                      '${(totalFocusedSeconds(widget.timers) / 60).round()} minutes',
                      style: const TextStyle(fontWeight: FontWeight.w800),
                    ),
                  ],
                ),
                const SizedBox(height: 20),
                Row(
                  mainAxisAlignment: MainAxisAlignment.spaceBetween,
                  children: [
                    const Text(
                      'Almost give up:',
                      style: TextStyle(fontSize: 16),
                    ),
                    Text(
                      '$giveUps time(s)',
                      style: const TextStyle(fontWeight: FontWeight.w800),
                    ),
                  ],
                ),
              ],
            ),
          ),
          const SizedBox(height: 34),
          PrimaryButton(
            label: 'Save and Finish',
            onPressed: () {
              Navigator.pop(context);
              widget.onFinish(totalFocusedSeconds(widget.timers), giveUps);
            },
          ),
        ],
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    final current = widget.timers[timerIndex];
    final total = phase == FocusPhase.focus
        ? current.focusSeconds
        : current.breakSeconds;
    final progress = total <= 0 ? 0.0 : 1 - (timeLeft / total);

    return Scaffold(
      appBar: AppTopBar(
        title: phase == FocusPhase.focus ? 'Focus Session' : 'Break Time',
        compact: true,
      ),
      body: SafeArea(
        top: false,
        child: Center(
          child: Container(
            width: min(MediaQuery.of(context).size.width - 36, 394),
            padding: const EdgeInsets.all(18),
            decoration: BoxDecoration(
              color: AppColors.primary500,
              borderRadius: BorderRadius.circular(16),
            ),
            child: Column(
              mainAxisSize: MainAxisSize.min,
              children: [
                Text(
                  phase == FocusPhase.focus ? 'Focus Session' : 'Break Time',
                  style: const TextStyle(
                    color: Colors.white,
                    fontSize: 32,
                    fontWeight: FontWeight.w800,
                  ),
                ),
                const SizedBox(height: 28),
                Text(
                  '#${timerIndex + 1}',
                  style: const TextStyle(
                    color: Colors.white,
                    fontSize: 32,
                    fontWeight: FontWeight.w800,
                  ),
                ),
                const SizedBox(height: 36),
                SizedBox(
                  width: 220,
                  height: 220,
                  child: Stack(
                    alignment: Alignment.center,
                    children: [
                      SizedBox(
                        width: 210,
                        height: 210,
                        child: CircularProgressIndicator(
                          value: progress,
                          strokeWidth: 10,
                          color: const Color(0xFFA9BAA2),
                          backgroundColor: const Color(0xFF33383A),
                          strokeCap: StrokeCap.round,
                        ),
                      ),
                      Text(
                        clock(timeLeft),
                        style: const TextStyle(
                          color: Colors.white,
                          fontSize: 42,
                          fontWeight: FontWeight.w800,
                        ),
                      ),
                    ],
                  ),
                ),
                const SizedBox(height: 34),
                PrimaryButton(
                  label: 'Give Up!',
                  danger: true,
                  onPressed: showGiveUpDialog,
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }
}

class AppScaffold extends StatelessWidget {
  const AppScaffold({
    required this.title,
    required this.child,
    required this.selectedIndex,
    required this.onNav,
    super.key,
  });

  final String title;
  final Widget child;
  final int selectedIndex;
  final void Function(AppPage page) onNav;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppTopBar(title: title),
      body: SafeArea(top: false, child: child),
      bottomNavigationBar: BottomNav(
        selectedIndex: selectedIndex,
        onNav: onNav,
      ),
    );
  }
}

class AppTopBar extends StatelessWidget implements PreferredSizeWidget {
  const AppTopBar({required this.title, this.compact = false, super.key});

  final String title;
  final bool compact;

  @override
  Size get preferredSize => Size.fromHeight(compact ? 58 : 62);

  @override
  Widget build(BuildContext context) {
    return AppBar(
      backgroundColor: AppColors.primary400,
      foregroundColor: Colors.white,
      elevation: 0,
      automaticallyImplyLeading: false,
      titleSpacing: 24,
      title: Row(
        children: [
          Expanded(
            child: Text(
              title,
              style: const TextStyle(fontSize: 24, fontWeight: FontWeight.w800),
            ),
          ),
          const Text(
            'v$appVersion',
            style: TextStyle(
              fontSize: 11,
              fontWeight: FontWeight.w700,
              color: Colors.white70,
            ),
          ),
        ],
      ),
    );
  }
}

class BottomNav extends StatelessWidget {
  const BottomNav({
    required this.selectedIndex,
    required this.onNav,
    super.key,
  });

  final int selectedIndex;
  final void Function(AppPage page) onNav;

  @override
  Widget build(BuildContext context) {
    final items = [
      (Icons.person_outline, 'Profile', AppPage.profile),
      (Icons.home_outlined, 'Dashboard', AppPage.dashboard),
      (Icons.access_time, 'Set timer', AppPage.timer),
    ];

    return Container(
      height: 94,
      color: AppColors.primary400,
      padding: const EdgeInsets.fromLTRB(28, 8, 28, 10),
      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        children: List.generate(items.length, (index) {
          final item = items[index];
          final active = index == selectedIndex;
          return InkWell(
            borderRadius: BorderRadius.circular(8),
            onTap: () => onNav(item.$3),
            child: Container(
              width: 86,
              height: 78,
              decoration: BoxDecoration(
                color: active ? AppColors.primary500 : Colors.transparent,
                borderRadius: BorderRadius.circular(8),
              ),
              child: Column(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  Icon(item.$1, size: 32, color: AppColors.ink),
                  const SizedBox(height: 4),
                  Text(
                    item.$2,
                    style: TextStyle(
                      fontSize: 14,
                      fontWeight: active ? FontWeight.w800 : FontWeight.w700,
                    ),
                  ),
                ],
              ),
            ),
          );
        }),
      ),
    );
  }
}

class PrimaryButton extends StatelessWidget {
  const PrimaryButton({
    required this.label,
    this.onPressed,
    this.danger = false,
    this.icon,
    super.key,
  });

  final String label;
  final VoidCallback? onPressed;
  final bool danger;
  final IconData? icon;

  @override
  Widget build(BuildContext context) {
    return SizedBox(
      height: 48,
      width: double.infinity,
      child: ElevatedButton.icon(
        onPressed: onPressed,
        icon: icon == null ? const SizedBox.shrink() : Icon(icon, size: 22),
        label: Text(label),
        style: ElevatedButton.styleFrom(
          backgroundColor: danger ? AppColors.danger : AppColors.primary500,
          foregroundColor: danger ? AppColors.dangerText : Colors.white,
          elevation: 0,
          iconColor: Colors.white,
          shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(8)),
          textStyle: const TextStyle(fontSize: 16, fontWeight: FontWeight.w600),
        ),
      ),
    );
  }
}

class AppTextField extends StatelessWidget {
  const AppTextField({
    required this.label,
    required this.hint,
    required this.controller,
    this.obscure = false,
    this.centeredLabel = false,
    this.fill,
    super.key,
  });

  final String label;
  final String hint;
  final TextEditingController controller;
  final bool obscure;
  final bool centeredLabel;
  final Color? fill;

  @override
  Widget build(BuildContext context) {
    return Column(
      crossAxisAlignment: centeredLabel
          ? CrossAxisAlignment.center
          : CrossAxisAlignment.start,
      children: [
        if (label.isNotEmpty)
          Text(
            label,
            textAlign: centeredLabel ? TextAlign.center : TextAlign.left,
            style: const TextStyle(fontSize: 16),
          ),
        if (label.isNotEmpty) const SizedBox(height: 8),
        TextField(
          controller: controller,
          obscureText: obscure,
          decoration: InputDecoration(
            hintText: hint,
            hintStyle: const TextStyle(color: AppColors.muted),
            filled: true,
            fillColor: fill ?? Colors.white,
            isDense: true,
            contentPadding: const EdgeInsets.symmetric(
              horizontal: 12,
              vertical: 12,
            ),
            enabledBorder: OutlineInputBorder(
              borderRadius: BorderRadius.circular(7),
              borderSide: const BorderSide(color: AppColors.line),
            ),
            focusedBorder: OutlineInputBorder(
              borderRadius: BorderRadius.circular(7),
              borderSide: const BorderSide(
                color: AppColors.primary500,
                width: 1.4,
              ),
            ),
          ),
        ),
      ],
    );
  }
}

class AppDialog extends StatelessWidget {
  const AppDialog({required this.title, required this.children, super.key});

  final String title;
  final List<Widget> children;

  @override
  Widget build(BuildContext context) {
    return Dialog(
      backgroundColor: Colors.transparent,
      insetPadding: const EdgeInsets.symmetric(horizontal: 18),
      child: Container(
        width: 388,
        padding: const EdgeInsets.all(20),
        decoration: BoxDecoration(
          color: AppColors.primary400,
          borderRadius: BorderRadius.circular(18),
        ),
        child: Column(
          mainAxisSize: MainAxisSize.min,
          children: [
            Text(
              title,
              textAlign: TextAlign.center,
              style: const TextStyle(
                color: Colors.white,
                fontSize: 25,
                fontWeight: FontWeight.w800,
              ),
            ),
            const SizedBox(height: 12),
            ...children,
          ],
        ),
      ),
    );
  }
}

class TimeParts {
  TimeParts({
    required this.hours,
    required this.minutes,
    required this.seconds,
  });

  int hours;
  int minutes;
  int seconds;

  factory TimeParts.zero() => TimeParts(hours: 0, minutes: 0, seconds: 0);

  factory TimeParts.fromSeconds(int totalSeconds) {
    return TimeParts(
      hours: totalSeconds ~/ 3600,
      minutes: (totalSeconds % 3600) ~/ 60,
      seconds: totalSeconds % 60,
    );
  }

  int toSeconds() => hours * 3600 + minutes * 60 + seconds;
}

class TimeDisplay extends StatelessWidget {
  const TimeDisplay({required this.parts, super.key});

  final TimeParts parts;

  @override
  Widget build(BuildContext context) {
    return Row(
      mainAxisAlignment: MainAxisAlignment.center,
      children: [
        TimeUnit(value: parts.hours, label: 'Hours'),
        const TimeColon(),
        TimeUnit(value: parts.minutes, label: 'Minutes'),
        const TimeColon(),
        TimeUnit(value: parts.seconds, label: 'Seconds'),
      ],
    );
  }
}

class TimeUnit extends StatelessWidget {
  const TimeUnit({required this.value, required this.label, super.key});

  final int value;
  final String label;

  @override
  Widget build(BuildContext context) {
    return SizedBox(
      width: 82,
      child: Column(
        children: [
          Text(
            value.toString().padLeft(2, '0'),
            style: const TextStyle(
              color: Colors.white,
              fontSize: 28,
              fontWeight: FontWeight.w800,
            ),
          ),
          const SizedBox(height: 8),
          Text(
            label,
            style: const TextStyle(color: Colors.white, fontSize: 14),
          ),
        ],
      ),
    );
  }
}

class TimeColon extends StatelessWidget {
  const TimeColon({super.key});

  @override
  Widget build(BuildContext context) {
    return const Padding(
      padding: EdgeInsets.only(bottom: 26),
      child: Text(
        ':',
        style: TextStyle(
          color: Colors.white,
          fontSize: 30,
          fontWeight: FontWeight.w800,
        ),
      ),
    );
  }
}

class TimeDialog extends StatefulWidget {
  const TimeDialog({
    required this.title,
    required this.initialSeconds,
    super.key,
  });

  final String title;
  final int initialSeconds;

  @override
  State<TimeDialog> createState() => _TimeDialogState();
}

class _TimeDialogState extends State<TimeDialog> {
  late final hoursController = TextEditingController(
    text: TimeParts.fromSeconds(
      widget.initialSeconds,
    ).hours.toString().padLeft(2, '0'),
  );
  late final minutesController = TextEditingController(
    text: TimeParts.fromSeconds(
      widget.initialSeconds,
    ).minutes.toString().padLeft(2, '0'),
  );
  late final secondsController = TextEditingController(
    text: TimeParts.fromSeconds(
      widget.initialSeconds,
    ).seconds.toString().padLeft(2, '0'),
  );

  @override
  void dispose() {
    hoursController.dispose();
    minutesController.dispose();
    secondsController.dispose();
    super.dispose();
  }

  int value() {
    return (int.tryParse(hoursController.text) ?? 0) * 3600 +
        (int.tryParse(minutesController.text) ?? 0) * 60 +
        (int.tryParse(secondsController.text) ?? 0);
  }

  @override
  Widget build(BuildContext context) {
    return AppDialog(
      title: widget.title,
      children: [
        const SizedBox(height: 16),
        Row(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            TimeInputBox(controller: hoursController, label: 'Hours'),
            const TimeColon(),
            TimeInputBox(controller: minutesController, label: 'Minutes'),
            const TimeColon(),
            TimeInputBox(controller: secondsController, label: 'Seconds'),
          ],
        ),
        const SizedBox(height: 28),
        PrimaryButton(
          label: 'Set Timer',
          onPressed: () => Navigator.pop(context, value()),
        ),
      ],
    );
  }
}

class TimeInputBox extends StatelessWidget {
  const TimeInputBox({
    required this.controller,
    required this.label,
    super.key,
  });

  final TextEditingController controller;
  final String label;

  @override
  Widget build(BuildContext context) {
    return SizedBox(
      width: 80,
      child: Column(
        children: [
          TextField(
            controller: controller,
            textAlign: TextAlign.center,
            keyboardType: TextInputType.number,
            maxLength: 2,
            style: const TextStyle(
              color: Colors.white,
              fontSize: 28,
              fontWeight: FontWeight.w800,
            ),
            decoration: const InputDecoration(
              counterText: '',
              border: InputBorder.none,
              isDense: true,
            ),
          ),
          Text(
            label,
            style: const TextStyle(color: Colors.white, fontSize: 14),
          ),
        ],
      ),
    );
  }
}

class BlockedAppTile extends StatelessWidget {
  const BlockedAppTile({required this.app, required this.onTap, super.key});

  final BlockedApp app;
  final VoidCallback onTap;

  @override
  Widget build(BuildContext context) {
    return InkWell(
      onTap: onTap,
      borderRadius: BorderRadius.circular(5),
      child: Container(
        height: 58,
        padding: const EdgeInsets.symmetric(horizontal: 12),
        decoration: BoxDecoration(
          color: app.selected ? const Color(0xFFAEBFA5) : AppColors.primary100,
          borderRadius: BorderRadius.circular(5),
        ),
        child: Row(
          children: [
            CircleAvatar(
              backgroundColor: app.color,
              radius: 20,
              child: Text(
                app.label,
                style: const TextStyle(
                  color: Colors.white,
                  fontSize: 12,
                  fontWeight: FontWeight.w800,
                ),
              ),
            ),
            const SizedBox(width: 16),
            Expanded(
              child: Text(app.name, style: const TextStyle(fontSize: 18)),
            ),
            Container(
              width: 30,
              height: 30,
              decoration: BoxDecoration(
                border: Border.all(color: AppColors.primary500, width: 2),
                borderRadius: BorderRadius.circular(4),
              ),
              child: app.selected
                  ? const Icon(
                      Icons.check,
                      color: AppColors.primary500,
                      size: 23,
                    )
                  : null,
            ),
          ],
        ),
      ),
    );
  }
}

class TimerTile extends StatelessWidget {
  const TimerTile({
    required this.index,
    required this.timer,
    this.onTap,
    this.onDelete,
    super.key,
  });

  final int index;
  final FocusTimer timer;
  final VoidCallback? onTap;
  final VoidCallback? onDelete;

  @override
  Widget build(BuildContext context) {
    final first = index == 0;
    return InkWell(
      onTap: onTap,
      borderRadius: BorderRadius.circular(7),
      child: Container(
        height: 84,
        decoration: BoxDecoration(
          color: first ? const Color(0xFFAFBEA8) : AppColors.primary400,
          borderRadius: BorderRadius.circular(7),
        ),
        child: Row(
          children: [
            SizedBox(
              width: 66,
              child: Center(
                child: Text(
                  '#${index + 1}',
                  style: const TextStyle(
                    color: Colors.white,
                    fontSize: 22,
                    fontWeight: FontWeight.w800,
                  ),
                ),
              ),
            ),
            Container(width: 1, height: double.infinity, color: Colors.white70),
            Expanded(
              child: TimerValueColumn(
                title: 'Focus\nTime',
                value: hms(timer.focusSeconds),
              ),
            ),
            Expanded(
              child: TimerValueColumn(
                title: 'Break\nTime',
                value: hms(timer.breakSeconds),
              ),
            ),
            if (onDelete != null)
              IconButton(
                onPressed: onDelete,
                icon: const Icon(Icons.close, color: Colors.white),
              )
            else
              const SizedBox(width: 42),
          ],
        ),
      ),
    );
  }
}

class TimerValueColumn extends StatelessWidget {
  const TimerValueColumn({required this.title, required this.value, super.key});

  final String title;
  final String value;

  @override
  Widget build(BuildContext context) {
    return Column(
      mainAxisAlignment: MainAxisAlignment.center,
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Text(
          title,
          style: const TextStyle(
            color: Colors.white,
            fontSize: 20,
            height: 1.05,
          ),
        ),
        const SizedBox(height: 8),
        Container(
          padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 4),
          decoration: BoxDecoration(
            color: AppColors.primary600.withValues(alpha: 0.45),
            borderRadius: BorderRadius.circular(999),
          ),
          child: Text(
            value,
            style: const TextStyle(color: Colors.white, fontSize: 14),
          ),
        ),
      ],
    );
  }
}

class SessionTile extends StatelessWidget {
  const SessionTile({required this.session, super.key});

  final PastSession session;

  @override
  Widget build(BuildContext context) {
    final date =
        '${session.date.day.toString().padLeft(2, '0')}/${session.date.month.toString().padLeft(2, '0')}/${session.date.year}';
    return Container(
      padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 13),
      decoration: BoxDecoration(
        color: AppColors.primary500,
        borderRadius: BorderRadius.circular(4),
      ),
      child: Row(
        children: [
          SizedBox(
            width: 120,
            child: Text(
              date,
              textAlign: TextAlign.center,
              style: const TextStyle(
                color: Colors.white,
                fontSize: 20,
                fontWeight: FontWeight.w800,
              ),
            ),
          ),
          Container(width: 1, height: 52, color: Colors.white70),
          const SizedBox(width: 18),
          Expanded(
            child: Column(
              children: [
                Row(
                  mainAxisAlignment: MainAxisAlignment.spaceBetween,
                  children: [
                    const Text(
                      'Time focused:',
                      style: TextStyle(color: Colors.white),
                    ),
                    Text(
                      '${(session.focusedSeconds / 60).round()} minutes',
                      style: const TextStyle(
                        color: Colors.white,
                        fontWeight: FontWeight.w800,
                      ),
                    ),
                  ],
                ),
                const SizedBox(height: 10),
                Row(
                  mainAxisAlignment: MainAxisAlignment.spaceBetween,
                  children: [
                    const Text(
                      'Almost give up:',
                      style: TextStyle(color: Colors.white),
                    ),
                    Text(
                      '${session.giveUps} time(s)',
                      style: const TextStyle(
                        color: Colors.white,
                        fontWeight: FontWeight.w800,
                      ),
                    ),
                  ],
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }
}

class AvatarTile extends StatelessWidget {
  const AvatarTile({required this.selected, required this.onTap, super.key});

  final bool selected;
  final VoidCallback onTap;

  @override
  Widget build(BuildContext context) {
    return InkWell(
      onTap: onTap,
      borderRadius: BorderRadius.circular(4),
      child: Container(
        decoration: BoxDecoration(
          color: const Color(0xFFD9D9D9),
          borderRadius: BorderRadius.circular(4),
          border: selected
              ? Border.all(color: AppColors.primary500, width: 3)
              : null,
        ),
      ),
    );
  }
}
